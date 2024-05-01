from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson import json_util
from datetime import date
import uuid


app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb+srv://Amanda:amanda1234@mernapp.juehqhn.mongodb.net/Ino_Agri_Mobile_App"
mongo = PyMongo(app)

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

if __name__ == '__main__':
    app.run(debug=True, host='192.168.1.100')