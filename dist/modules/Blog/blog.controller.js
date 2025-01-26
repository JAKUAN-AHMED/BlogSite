"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogControllers = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const blog_model_1 = require("./blog.model");
const createBlog = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // create blog
    const { title, content } = req.body;
    try {
        const blog = yield blog_model_1.BlogModel.create({
            title,
            content,
            author: req.user.id,
        });
        (0, sendResponse_1.default)(res, {
            success: true,
            message: 'Blog created successfully',
            statusCode: 201,
            data: blog,
        });
    }
    catch (err) {
        throw new AppError_1.default(false, 400, "Erro creating blog", err.message);
    }
}));
const updateBlog = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const blog = yield blog_model_1.BlogModel.findByIdAndUpdate(id, {
            title,
            content
        }, { new: true });
        (0, sendResponse_1.default)(res, {
            success: true,
            message: 'Blog updated successfully',
            statusCode: 200,
            data: blog
        });
    }
    catch (err) {
        throw new AppError_1.default(false, 400, "Erro updating blog", err.message);
    }
}));
const deleteBlog = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const blog = yield blog_model_1.BlogModel.findByIdAndDelete(id);
        if (!blog) {
            throw new AppError_1.default(false, 404, 'Blog not found');
        }
        res.status(200).json({
            success: true,
            message: 'Blog deleted successfully',
            statusCode: 200,
        });
    }
    catch (err) {
        throw new AppError_1.default(false, 400, 'Erro deleting blog', err.message);
    }
}));
const getAllBlogs = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { search, sortBy = 'createdAt', sortOrder = 'desc', filter } = req.query;
    try {
        const query = {};
        if (search) {
            query.$or = [{ title: { $regex: search, $options: 'i' } }, { content: { $regex: search, $options: 'i' } }];
        }
        if (filter) {
            query.author = filter;
        }
        const blogs = yield blog_model_1.BlogModel.find(query).populate('author', 'name email').sort({ [sortBy]: sortOrder === 'desc' ? -1 : 1 });
        (0, sendResponse_1.default)(res, {
            success: true,
            message: blogs ? 'Blogs fetched successfully' : 'No blogs found',
            statusCode: 200,
            data: blogs ? blogs : [],
        });
    }
    catch (err) {
        throw new AppError_1.default(false, 400, "Erro fetching blogs", err.message);
    }
}));
exports.BlogControllers = {
    createBlog,
    updateBlog,
    deleteBlog,
    getAllBlogs
};
