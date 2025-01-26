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
exports.getUser = exports.getAllUsers = void 0;
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const user_model_1 = require("./user.model");
exports.getAllUsers = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.UserModel.find();
    res.status(200).json({
        success: true,
        message: users ? "All users fetched" : "No users found",
        statusCode: 200,
        data: users ? users : [],
    });
}));
exports.getUser = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_model_1.UserModel.findById(id);
    res.status(200).json({
        success: true,
        message: "User fetched",
        statusCode: 200,
        data: user,
    });
}));
