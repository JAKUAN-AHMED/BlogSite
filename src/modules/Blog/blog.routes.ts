import { Router } from "express";
import { BlogControllers } from "./blog.controller";
import { authenticate } from "../../middlewares/auth";
import validateRequest from "../../middlewares/ValidateRequest";
import { BlogValidationSchema } from "./blog.validation";

const router=Router();
router.post('/',authenticate,validateRequest(BlogValidationSchema.createBlogValidation),BlogControllers.createBlog);
router.patch('/:id',authenticate,validateRequest(BlogValidationSchema.updateValidationSchema),BlogControllers.updateBlog);
router.delete('/:id',authenticate,BlogControllers.deleteBlog);
router.get('/',BlogControllers.getAllBlogs);



export const BlogRoutes=router;