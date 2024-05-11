import {Router} from 'express'
import { registerUser,loginUser,userProfile } from '../Controller/user.controller'
import {verifyJWT} from "../../middleware/auth.token";
const UserRouter = Router()

UserRouter.post("/register",registerUser)
UserRouter.post("/login",loginUser)
UserRouter.get("/me",verifyJWT,userProfile)
export default UserRouter