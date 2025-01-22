import { verifyAdmin } from './../../middlewares/verifyAdmin';
import { Router } from "express";
import { authenticate } from "../../middlewares/auth";
import { Admincontrollers } from "./admin.controller";

const router=Router ();

router.patch('/users/:userId/block',authenticate,verifyAdmin,Admincontrollers.blockUser);
router.delete('/blogs/:id',authenticate,verifyAdmin,Admincontrollers.deleteBlog);
export const AdminRoutes=router;