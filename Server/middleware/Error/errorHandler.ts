import { NextFunction,Request,Response } from "express";
import { CustomError } from "../error";
import mongoose from "mongoose";

export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction)=>{
    console.log(err.stack)
 if(err instanceof CustomError){
  res.status(err.statusCode).json({"message":err.message});
  return
 }
 res.status(500).json({"message":"Internal Server Error"})
}

