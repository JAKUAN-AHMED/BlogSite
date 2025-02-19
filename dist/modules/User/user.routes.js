"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const router = (0, express_1.Router)();
router.get('/', user_controller_1.getAllUsers);
router.get('/:id', user_controller_1.getUser);
exports.UserRoutes = router;
