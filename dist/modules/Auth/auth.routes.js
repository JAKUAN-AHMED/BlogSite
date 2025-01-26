"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const ValidateRequest_1 = __importDefault(require("../../middlewares/ValidateRequest"));
const user_validation_1 = require("../User/user.validation");
const router = (0, express_1.Router)();
router.post('/register', (0, ValidateRequest_1.default)(user_validation_1.UserSchemaValidation.createUserValidation), auth_controller_1.AuthControllers.register);
router.post('/login', auth_controller_1.AuthControllers.login);
exports.AuthRoutes = router;
