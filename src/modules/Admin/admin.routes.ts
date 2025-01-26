import { verifyAdmin } from './../../middlewares/verifyAdmin';
import { Router } from "express";
import { authenticate } from "../../middlewares/auth";
import { Admincontrollers } from "./admin.controller";

const router=Router ();

router.patch('/users/:userId/block',verifyAdmin,authenticate,Admincontrollers.blockUser);
router.delete('/blogs/:id',verifyAdmin,authenticate,Admincontrollers.deleteBlog);
export const AdminRoutes=router;