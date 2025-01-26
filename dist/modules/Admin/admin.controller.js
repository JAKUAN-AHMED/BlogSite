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
exports.Admincontrollers = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const blog_model_1 = require("../Blog/blog.model");
const user_model_1 = require("../User/user.model");
const blockUser = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        yield user_model_1.UserModel.findByIdAndUpdate(userId, {
            isBlocked: 'true'
        });
        res.status(200).json({
            success: true,
            message: 'User blocked successfully',
            statusCode: 200,
        });
    }
    catch (err) {
        throw new AppError_1.default(false, 400, "Erro blocking user", err.message);
    }
}));
const deleteBlog = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const blog = yield blog_model_1.BlogModel.findByIdAndDelete(id);
        if (!blog) {
            throw new AppError_1.default(false, 404, "Blog not found");
        }
        res.status(200).json({
            success: true,
            message: 'Blog deleted successfully',
            statusCode: 200,
        });
    }
    catch (err) {
        throw new AppError_1.default(false, 400, "Erro deleting blog", err.message);
    }
}));
exports.Admincontrollers = {
    blockUser,
    deleteBlog
};
