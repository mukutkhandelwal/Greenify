import { Request,Response,NextFunction} from "express";
import { CustomError } from "../../middleware/Error/error";
import Products from "../../models/Products";
import {Query} from "../../Types/Query"
import { ExtendedRequest } from "../../Types/User.request";
export const getAllProducts = async(req:Request<Query>,res:Response,next:NextFunction)=>{
try{
    const {category,subCategory,searchTerm} = req.query
    const filter:Record<string, string|RegExp> = {}
    if (category) filter.category = category.toString()
    if(subCategory) filter.subCategory = subCategory.toString()
    if (searchTerm) filter.searchTerm = new RegExp(searchTerm.toString(),"i") //i for case insensitive
    const allProducts = Products.find(filter)
    if(!allProducts){
        // res.status(400)
        throw new CustomError("No products found",401)
    }
    else{
        res.status(201).json(allProducts)
    }
}
catch(err){
    next(err)
}
}

export const getSingleProduct = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const {productId} = req.params;
        const product = await Products.findById(productId)
        if(!product){
            // res.status(401)
            throw new CustomError("No Product Found",401)
        }
        res.status(200).json(product)
    }
catch(err){
    next(err)
}
}

// admin api to add products to DB

export const createProducts = async (req:ExtendedRequest,res:Response,next:NextFunction)=>{
    try{

        if(req.userType != "admin"){
            res.status(403);
            throw new CustomError("Unauthorized: Admin access required",403)
        }
        const newProduct = new Products(req.body)
        const savedProducts =  await newProduct.save()
        res.status(201).json(savedProducts)

    }
    catch(err){
        next(err)
    }
}