"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = require("express");
const blog_controller_1 = require("./blog.controller");
const auth_1 = require("../../middlewares/auth");
const ValidateRequest_1 = __importDefault(require("../../middlewares/ValidateRequest"));
const blog_validation_1 = require("./blog.validation");
const router = (0, express_1.Router)();
router.post('/', auth_1.authenticate, (0, ValidateRequest_1.default)(blog_validation_1.BlogValidationSchema.createBlogValidation), blog_controller_1.BlogControllers.createBlog);
router.patch('/:id', auth_1.authenticate, (0, ValidateRequest_1.default)(blog_validation_1.BlogValidationSchema.updateValidationSchema), blog_controller_1.BlogControllers.updateBlog);
router.delete('/:id', auth_1.authenticate, blog_controller_1.BlogControllers.deleteBlog);
router.get('/', blog_controller_1.BlogControllers.getAllBlogs);
exports.BlogRoutes = router;
