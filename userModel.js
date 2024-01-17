const mongoose = require('mongoose');
const userModel = new mongoose.Schema(
    {
        name: {
            type: String
        },
        edad: {
            type: Number
        },
        email: {
            type: String
        }, 
        password:{
            type: String
        }
    },
    {
        timestamps: true, 
        versionKey: false
    }
);

const ModelUser = mongoose.model("users", userModel);
module.exports = ModelUser