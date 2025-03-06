import mongoose from "mongoose"


// provides a model for the new user 

const userSchemaa = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    cartData: {
        type: Object,
        default: {}
    }
}, { minimize: false })

const userModel = mongoose.models.user || mongoose.model("user", userSchemaa)

export default userModel;