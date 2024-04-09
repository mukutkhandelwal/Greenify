import {Router} from 'express'
import { registerUser,loginUser } from '../Controller/user.controller'

const UserRouter = Router()

UserRouter.post("/register",registerUser)
UserRouter.post("/login",loginUser)

export default UserRouter