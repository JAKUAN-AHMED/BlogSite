import { Types } from "mongoose";
import { z } from "zod";

const createBlogValidation = z.object({
    title: z.string(),
    content: z.string(),
    
})


const updateValidationSchema=createBlogValidation.partial();
export const BlogValidationSchema={
    createBlogValidation,
    updateValidationSchema
}