import {Router} from 'express'
import { registerUser,loginUser,userProfile, updateUser } from '../Controller/user.controller'
import {verifyJWT} from "../../middleware/auth.token";
const UserRouter = Router()

UserRouter.post("/register",registerUser)
UserRouter.post("/login",loginUser)
UserRouter.get("/me",verifyJWT,userProfile)
UserRouter.put("/me",verifyJWT,updateUser)
export default UserRouter