"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../modules/Auth/auth.routes");
const blog_routes_1 = require("../modules/Blog/blog.routes");
const admin_routes_1 = require("../modules/Admin/admin.routes");
const user_routes_1 = require("../modules/User/user.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_routes_1.AuthRoutes,
    },
    {
        path: '/users',
        route: user_routes_1.UserRoutes,
    },
    {
        path: '/admin',
        route: admin_routes_1.AdminRoutes,
    },
    {
        path: '/blogs',
        route: blog_routes_1.BlogRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
