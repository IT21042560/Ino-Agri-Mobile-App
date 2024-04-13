import mongoose from "mongoose";
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    uID: {
        type: String,
        required: true,
    },
    uName: {
        type: String,
        required: true,
    },
    uEmail: {
        type: String,
        required: true,  
    },
    uLocation: {
        type: String,
        required: true,  
    },
    uContactNo: {
        type: String,
        required: true,  
    },
    uPassword: {
        type: String 
    },
}, { timestamps: true })

export default mongoose.model("User", UserSchema)