import { Router } from "express";
import {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} from "../Controllers/productController";

const router = Router();

router.get("/", getProducts);

router.post("/new-product", postProduct);

router.get("/get-product/:id", getProduct);

router.put("/update-product/:id", updateProduct);

router.delete("/delete-product/:id", deleteProduct);

export default router;
