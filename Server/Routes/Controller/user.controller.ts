import { Request,Response,NextFunction } from "express"
import User from "../../models/User"
import { CustomError } from "../../middleware/error"
import * as bcrypt from "bcryptjs"
import _ from "lodash"


export const registerUser = async (req:Request,res:Response,next:NextFunction)=>{
    try{
   const {userName,firstName,lastName,email,password,user} = req.body
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
    const {userName,password} = req.body
    // const user = awai
}