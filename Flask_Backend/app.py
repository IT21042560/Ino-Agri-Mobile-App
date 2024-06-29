from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson import json_util
from datetime import date
import uuid
from ultralytics import YOLO
import os
import cv2
import io
from PIL import Image
from werkzeug.utils import send_from_directory
from keras.models import load_model
from keras.preprocessing import image
import numpy as np


app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb+srv://Amanda:amanda1234@mernapp.juehqhn.mongodb.net/Ino_Agri_Mobile_App"
mongo = PyMongo(app)

def pestPredict(mdl):
    model = YOLO('pest_model.pt')
    pred_value = model.predict(mdl, save=True)
    return pred_value

@app.route("/user/signup", methods=['POST'])
def detect_object():
    if request.method == 'POST':
        users = mongo.db.users 
        data = request.json
       # user_data = dict(request.form)
        uID = str(date.today()) + uuid.uuid4().hex
        uName = data['uName']
        uEmail = data['uEmail']
        uLocation = data['uLocation']
        uContactNo = data['uContactNo']
        uPassword = data['uPassword']
        
        user = {
            "uID": uID,
            "uName": uName,
            "uEmail": uEmail,
            "uLocation": uLocation,
            "uContactNo": uContactNo,
            "uPassword": uPassword
        }
        #insert_users_json = json_util.dumps(user)
        insert_user = users.insert_one(user)
        return jsonify({"message":"User Created", "user_id": str(insert_user.inserted_id)})

@app.route("/user", methods=['GET'])
def welcome():
    users = mongo.db.users
    all_users = list(users.find())
    all_users_json = json_util.dumps(all_users)
    return jsonify(all_users_json)

# Define function for preprocessing images
def preprocess_image(image_path):
    img = image.load_img(image_path, target_size=(224, 224))  # Assuming your model requires input size (224, 224)
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.  # Normalize pixel values to [0, 1]
    return img_array      
        
@app.route("/pest/predict", methods=['POST'])
def mytest():
        # Fetch the image
    file = request.files['image']
    # Validate the image
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    # Save user entered image
    save_path = './Pest_Image_Uploads'
    if not os.path.exists(save_path):
        os.makedirs(save_path)

    upload_path = os.path.join(save_path, file.filename)
    file.save(upload_path)

    # Save user entered image 2
    save_path_2 = '../frontend/pest_uploaded_images'
    if not os.path.exists(save_path_2):
        os.makedirs(save_path_2)

    upload_path_2 = os.path.join(save_path_2, file.filename)
    file.save(upload_path_2)


    # ----Yolov8 object detection-----
    # Load yolo model
    model = YOLO("pest_model.pt")
    # Load input image
    results = model.predict(upload_path)
    # Get the result
    result = results[0]
    len(result.boxes)
    box = result.boxes[0]
    cords = box.xyxy[0].tolist()
    class_id = result.names[box.cls[0].item()]
    conf = round(box.conf[0].item(), 2)

    yolo_prediction = {
        'object_type': class_id,
        'probability': conf
    }

    # -------Inception V8 computer vision---------
    # Load your custom Keras model
    model_path = './pest_classify_model.h5'
    # Load the input image
    model = load_model(model_path)
    # Create the label names
    class_names = ['Apids', 'Catterpillar', 'Leaf miner', 'Mites', 'Thrips', 'Whiteflies']
    # Preprocess the image
    preprocessed_image = preprocess_image(upload_path)
    # Make prediction
    prediction = model.predict(preprocessed_image)
    # Map probabilities to class names
    predicted_class_index = np.argmax(prediction)
    predicted_class = class_names[predicted_class_index]

    if predicted_class == "Apids": 
        predicted_class = "Aphids"

    inception_prediction = {
        'predicted_class': predicted_class,
        #'probability': float(prediction[0][predicted_class_index])
    }

    response = {
        'yolo_prediction': yolo_prediction,
        'inception_prediction': inception_prediction,
        'image_name' : file.filename
    }

    if predicted_class == class_id:
        response['message'] = True
    else:
        response['message'] = False

    return jsonify(response)


@app.route("/pest/try", methods=['POST'])
def mytest2():
    print(request.files.keys())  # Print keys to see what keys are present
    if 'image' in request.files:
        image = request.files['image']
        print(image) 
        return "Done"
    else:
        return "No image file found in the request"
    
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part'
    
    file = request.files['file']
    if file.filename == '':
        return 'No selected file'

    # Change this path to the folder where you want to save the images
    save_path = './Pest_Image_Uploads'

    if not os.path.exists(save_path):
        os.makedirs(save_path)

    file.save(os.path.join(save_path, file.filename))
    return 'File uploaded successfully'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)