"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchemaValidation = void 0;
const zod_1 = require("zod");
const createUserValidation = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(4),
});
const updateUserValidation = createUserValidation.partial();
exports.UserSchemaValidation = {
    createUserValidation,
    updateUserValidation
};
