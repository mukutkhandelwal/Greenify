import * as mongoose from "mongoose";
import * as bcrypt from "bcryptjs";
import { NextFunction } from "express";
interface User{
  userName:string,
  email:string,
  password:string,
  firstName:string,
  lastName:string,
  shippingAddress:Address,
  billingAddress:Address,
  user:"user"|"admin"
}
interface Address{
  street:string,
  city:string,
  state:string,
  zipCode:string,
  country:string
}



const userSchema = new mongoose.Schema({
  userName:{
    type:String,
    require:true,
    unique:true
  },
  email:{
    type:String,
    require:true,
    unique:true
  },
  password:{
    type:String,
    require:true
  },
  firstName:{
    type:String,
    require:true
  },
  lastName:{
    type:String,
    require:true
  },
  shippingAddress:{
    type:Object,
    require:false,
    properties:{
        street:{
            type:String,
            require:true
          },
          city:{
            type:String,
            require:true
          },
          state:{
            type:String,
            require:true
          },
          zipCode:{
            type:String,
            require:true
          },
          country:{
            type:String,
            require:true
          }
    }
  },
  billingAddress:{
    type:Object,
    require:false,
    properties:{
        street:{
            type:String,
            require:true
          },
          city:{
            type:String,
            require:true
          },
          state:{
            type:String,
            require:true
          },
          zipCode:{
            type:String,
            require:true
          },
          country:{
            type:String,
            require:true
          }
    }
  },
  user:{
    type:String,
    require:true,
    enum:["user","admin"]
  }
},{timestamps:true});




export default mongoose.model<User>("User",userSchema)