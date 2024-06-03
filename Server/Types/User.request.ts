import { Request } from "express"
export interface ExtendedRequest extends Request{
    userId?:string
    userType?:string
}