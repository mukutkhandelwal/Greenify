import express  from "express";
import { Request,Response,NextFunction } from "express";
import jwt, { JwtPayload }  from "jsonwebtoken";
import { CustomError } from "./Error/error";

interface ExtendedRequest extends Request{
userId?:string,

}
export const verifyJWT = (req:ExtendedRequest,res:Response,next:NextFunction)=>{
    try{
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            
            throw new CustomError("Unauthorized",401)
        
        }
        const token = authHeader.split(" ")[1]
        const decode = jwt.verify(token,process.env.JWT_SECRET!);
        const userId =(decode as JwtPayload).userId
        req.userId = userId
        next()

    }
    catch(err){
        if (err instanceof jwt.TokenExpiredError) {
            throw new CustomError("Token Expired", 400);
          }
        else if (err instanceof jwt.JsonWebTokenError) {
            throw new CustomError("Invalid Token", 400); // More specific error message
          } else {
            throw new CustomError("Forbidden", 403); // Re-throw original error
          }
    }
}
