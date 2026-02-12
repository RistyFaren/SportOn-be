import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware";
import { createCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from "../controllers/category.controller";
import { upload } from "../middlewares/upload.middleware";

const router = Router();

router.post("/", authenticate, createCategory);
router.get("/", getCategories);
router.get("/", getCategoryById);
router.put("/", authenticate, upload.single("image"), updateCategory);
router.delete("/", authenticate, deleteCategory);

export default router;