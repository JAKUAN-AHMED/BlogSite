"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogValidationSchema = void 0;
const zod_1 = require("zod");
const createBlogValidation = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
const updateValidationSchema = createBlogValidation.partial();
exports.BlogValidationSchema = {
    createBlogValidation,
    updateValidationSchema
};
