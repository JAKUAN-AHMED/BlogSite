import { NextFunction ,Request,Response} from "express";

export const verifyAdmin=async(req:Request,res:Response,next:NextFunction)=>{
    console.log('user role',req.user);
    if(req.user?.role!=="admin"){   
            res.status(403).json({
            success:false,
            message:"Access Denied.Admin Only"
        });
    }
    next();
};