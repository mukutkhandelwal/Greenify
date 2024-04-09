import * as mongoose from "mongoose";


const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Product"
    },
    rating:{
        type:Number,
        require:true
    },
    reviewText:{
        type:String,
        require:false
    }
},{timestamps:true})

module.exports = mongoose.model("Review",reviewSchema)