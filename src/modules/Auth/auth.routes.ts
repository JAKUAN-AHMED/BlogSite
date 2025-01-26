import { Router } from "express";
import { AuthControllers } from "./auth.controller";
import validateRequest from "../../middlewares/ValidateRequest";
import { UserSchemaValidation } from "../User/user.validation";

const router = Router();
router.post('/register',validateRequest(UserSchemaValidation.createUserValidation),AuthControllers.register);
router.post('/login',AuthControllers.login);
export const AuthRoutes = router;