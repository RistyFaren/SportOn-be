import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware";
import { upload } from "../middlewares/upload.middleware";
import { createProduct, deleteProduct, getProduct, getProductById, updateProduct } from "../controllers/product.controller";

const router = Router();

router.post("/", authenticate, upload.single("image"), createProduct);
router.get("/", getProduct);
router.get("/:id", getProductById);
router.put("/:id", authenticate, upload.single("image"), updateProduct);
router.delete("/", authenticate, deleteProduct);

export default router;