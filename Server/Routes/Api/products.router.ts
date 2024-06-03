import { Router } from "express";
import { verifyJWT } from "../../middleware/auth.token";
import  {getAllProducts}  from "../Controller/products.controller";
const ProductRouter = Router();

ProductRouter.get("/",getAllProducts)
ProductRouter.get("/:productId")
export default ProductRouter