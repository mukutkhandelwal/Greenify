import { Request,Response,NextFunction } from "express"
import User from "../../models/User"
import { CustomError } from "../../middleware/Error/error"
import * as bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import _ from "lodash"

interface ExtendedRequest extends Request{
    userId?:string
}

export const registerUser = async (req:Request,res:Response,next:NextFunction)=>{
    try{
    const defaultUser = "user"
   const {userName,firstName,lastName,email,password} = req.body
   const user = req.body.user || defaultUser
   const existUser = await User.findOne({userName})
   if(existUser){
    res.status(400)
    throw new CustomError("User already exist",400)
   }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    const createUser = await new User({userName,firstName,lastName,email,"password":hash,user})
    const savedUser = await createUser.save()
    const userResponse = _.pick(savedUser,["_id","userName","firstName","lastName","email","user"])
   res.status(201).json({"message":"User created successfully","data":userResponse})
   }

catch(err){
next(err)
}
}

export const loginUser = async (req:Request,res:Response,next:NextFunction)=>{
    try{
    const {userName,password} = req.body
    const userCheck = await User.findOne({userName})
    if(!userCheck){
        res.status(400)
        throw new CustomError("No user found",400)
    }
    const isMatch = await bcrypt.compareSync(password,userCheck.password)
    if(!isMatch){
        res.status(400)
        throw new CustomError("Username or password incorrect",400)
    }
    const payload  = {userId:userCheck._id}
    const token = jwt.sign(payload,process.env.JWT_SECRET!,{expiresIn:"1d"})
    res.status(200).json({ message: "Login successful!",token});
    
}
catch(err){
next(err)
}}

 export const userProfile = async (req:ExtendedRequest,res:Response,next:NextFunction)=>{
 try {
     const userId = req.userId
  const userData = await User.findById(userId).select("-_id -password -updatedAt -__v -createdAt")
  if(!userData){
    res.status(400)
    throw new CustomError("User not found",400)
  } 
  res.status(200).json({"data":userData})
   
} 
catch(err){
    next(err)
}
 }

 export const updateUser = async (req:ExtendedRequest,res:Response,next:NextFunction)=>{
    try{
        const userId = req.userId
        const {userName,email,firstName,lastName,shippingAddress,billingAddress} = req.body
        const userData = await User.findByIdAndUpdate(userId,{firstName,lastName,shippingAddress,billingAddress},{new:true})
        if(!userData){
            res.status(400)
            throw new CustomError("User not found",400)
        }
        res.status(200).json({"data":userData})
    }
    catch(err){
        next(err)
    }
}

export const adminUserFetch = async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const userID = req.body.userID
        const userData = await User.findById(userID).select("-_id -password -updatedAt -__v -createdAt")
        if(!userData){
            res.status(400)
            throw new CustomError("User not found",400)
        }
        res.status(200).json({"data":userData})
    }
    catch(err){
        next(err)
    }
}