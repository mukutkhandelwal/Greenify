import * as mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    items:{
        type:[Object],
        require:true,
        properties:{
            product:{
              type: mongoose.Schema.Types.ObjectId,
              require: true,
              ref: "Product"    
            },
            quantity:{
                type:Number,
                require:true
            },
            price:{
                type:Number,
                require:true
            }
        }
    },
    totalPrice:{
        type:Number,
        require:true
    },
    paymentMethod :{
        type:String,
        require:true
    },
    paymentStatus:{
        type:String,
        require:true,
        enum:["pending", "paid", "failed"]
    },

    orderStatus:{
        type:String,
        require:true,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled']
    },
    trackingNumber :{
        type:String,
        validate:{
            validator:()=>{
                return this.orderStatus ==='shipped'?this.trackingNumber:true;
            },
            message:'Tracking number is required when orderStatus is "shipped"'
        }
    }
})

module.exports = mongoose.model("Order",orderSchema)