import {Router} from 'express'
import { registerUser,loginUser,userProfile, updateUser, adminUserFetch } from '../Controller/user.controller'
import {createProducts} from "../Controller/products.controller"
import {verifyJWT} from "../../middleware/auth.token";
const adminRouter = Router()

adminRouter.post("/register",registerUser)
adminRouter.post("/login",loginUser)
adminRouter.get("/me",verifyJWT,userProfile)
adminRouter.put("/me",verifyJWT,updateUser)
adminRouter.get("/users",verifyJWT,adminUserFetch)
adminRouter.post("/addProducts",verifyJWT,createProducts)
export default adminRouter