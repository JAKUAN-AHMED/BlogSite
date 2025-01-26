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
exports.AuthControllers = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const user_model_1 = require("../User/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../config"));
const register = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield user_model_1.UserModel.create({ name, email, password: hashedPassword });
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            success: true,
            message: 'User registered successfully',
            data: user,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: 'Validation Error',
            statusCode: 400,
            error: err.message,
            stack: err.stack
        });
    }
}));
const login = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_model_1.UserModel
            .findOne({ email })
            .select('+password');
        if (!user || !(yield bcrypt_1.default.compare(password, user.password))) {
            throw new AppError_1.default(false, 401, 'Invalid credentials');
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, config_1.default.access_token_secret, { expiresIn: config_1.default.access_token_expires });
        res.status(200).json({
            success: true,
            message: 'Login successful',
            statusCode: 200,
            data: { token }
        });
    }
    catch (err) {
        res.status(401).json({
            success: false,
            message: 'Invalid credentials',
            statusCode: 401,
            error: err.message,
            stack: err.stack
        });
    }
}));
exports.AuthControllers = { register, login };
