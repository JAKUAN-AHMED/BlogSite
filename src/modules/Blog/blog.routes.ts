import { Router } from "express";
import { BlogControllers } from "./blog.controller";
import { authenticate } from "../../middlewares/auth";

const router=Router();
router.post('/',authenticate,BlogControllers.createBlog);
router.patch('/:id',authenticate,BlogControllers.updateBlog);
router.delete('/:id',authenticate,BlogControllers.deleteBlog);
router.get('/',BlogControllers.getAllBlogs);



export const BlogRoutes=router;