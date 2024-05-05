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

@app.route("/pest/predict", methods=['POST'])
def pestPredictMethod():
    image = request.files['image']
    basepath = os.path.dirname(__file__)
    filepath = os.path.join(basepath,'Pest_Image_Uploads',image.filename)
    print("upload folder is ", filepath)
    image.save(filepath)
    global imgpath
    pestPredictMethod.imgpath = image.filename
    print("printing predict_img :::::: ", pestPredictMethod)

    file_extension = image.filename.rsplit('.', 1)[1].lower() 

    if file_extension == 'jpg':
        img = cv2.imread(filepath)
        frame = cv2.imencode('.jpg', cv2.UMat(img))[1].tobytes()
                

        Pimage = Image.open(io.BytesIO(frame))
        print(Pimage)
                # Perform the detection
        yolo = YOLO('pest_model.pt')
        detections = yolo.predict(Pimage, save=True, source='runs/detect')
        return display(image.filename)
    
    folder_path = 'runs/detect'
    subfolders = [f for f in os.listdir(folder_path) if os.path.isdir(os.path.join(folder_path, f))]    
    latest_subfolder = max(subfolders, key=lambda x: os.path.getctime(os.path.join(folder_path, x)))    
    image_path = folder_path+'/'+latest_subfolder+'/'+image.filename 
    #return render_template('index.html', image_path=image_path)
    return "done"

    #pestname = pestPredict(image)
    #print(image)
    #print(pestname)
    #model = YOLO('pest_model.pt')
    #for result in image:
      #  boxes = result.boxes.xyxy.cpu().numpy()  
      #  labels = [model.names[int(cls)] for cls in result.boxes.cls]
#confidences = result.boxes.conf.cpu().numpy()
       # for box, label, confidence in zip(boxes, labels, confidences):
       #     print(f"Box: {box}, Label: {label}, Confidence: {confidence}")
    #results = model('C:/Users/sajin/Desktop/New folder/Ino-Agri-Mobile-App/Flask_Backend/mypest.png')
    #return jsonify(results)

# #The display function is used to serve the image or video from the folder_path directory.
@app.route('/<path:filename>')
def display(filename):
    folder_path = 'runs/detect'
    subfolders = [f for f in os.listdir(folder_path) if os.path.isdir(os.path.join(folder_path, f))]    
    latest_subfolder = max(subfolders, key=lambda x: os.path.getctime(os.path.join(folder_path, x)))    
    directory = folder_path+'/'+latest_subfolder    
    print("printing directory: ",directory) 
    files = os.listdir(directory)
    latest_file = files[0]
    
    print(latest_file)

    filename = os.path.join(folder_path, latest_subfolder, latest_file)

    file_extension = filename.rsplit('.', 1)[1].lower()

    environ = request.environ
    if file_extension == 'jpg':      
        return send_from_directory(directory,latest_file,environ) #shows the result in seperate tab

    else:
        return "Format file salah!"

# Define function for preprocessing images
def preprocess_image(image_path):
    img = image.load_img(image_path, target_size=(224, 224))  # Assuming your model requires input size (224, 224)
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.  # Normalize pixel values to [0, 1]
    return img_array      
        
@app.route("/pest/predict/next", methods=['POST'])
def mytest():

    #Yolov8 object detection
    model = YOLO("pest_model.pt")
    results = model.predict("next.png")
    result = results[0]
    len(result.boxes)
    box = result.boxes[0]
    cords = box.xyxy[0].tolist()
    class_id = result.names[box.cls[0].item()]
    conf = round(box.conf[0].item(), 2)
    print("YOLO V8")
    print("Object type:", class_id)
    print("Probability:", conf)

    print("")
    print("")
    print("")
    print("")

    #Inception V8 computer vision 
    # Load your custom Keras model
    model_path = './pest_classify_model.h5'
    model = load_model(model_path)
    class_names = ['Apids', 'Catterpillar', 'Leaf miner', 'Mites', 'Thrips', 'Whiteflies']
    # Prepare sample image paths
    sample_image_paths = './next.png'
    # Preprocess the image
    preprocessed_image = preprocess_image(sample_image_paths)
    # Make prediction
    prediction = model.predict(preprocessed_image)
    # Map probabilities to class names
    predicted_class_index = np.argmax(prediction)
    predicted_class = class_names[predicted_class_index]
    # Display prediction
    print(f"Prediction for image : {predicted_class} ({prediction[0][predicted_class_index]:.2f})")
    #print(results)

    if  predicted_class == class_id: 
        print("Both get same output")
    else:
        print("Both gives different output")
    return "Done"

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
    app.run(debug=True, host='192.168.1.4')