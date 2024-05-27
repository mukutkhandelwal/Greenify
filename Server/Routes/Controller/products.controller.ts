import { Request,Response,NextFunction} from "express";
import { CustomError } from "../../middleware/Error/error";
import Products from "../../models/Products";
import {Query} from "../../Types/Query"

export const getAllProducts = async(req:Request<Query>,res:Response,next:NextFunction)=>{
try{
    const {category,subCategory,searchTerm} = req.query
    const filter:Record<string, string|RegExp> = {}
    if (category) filter.category = category.toString()
    if(subCategory) filter.subCategory = subCategory.toString()
    if (searchTerm) filter.searchTerm = new RegExp(searchTerm.toString(),"i") //i for case insensitive
    const allProducts = Products.find(filter)
    if(!allProducts){
        res.status(400)
        throw new CustomError("No products found",400)
    }
    else{
        res.status(201).json(allProducts)
    }
}
catch(err){
    next(err)
}
}