import { send } from "process";
import AppError from "../../errors/AppError";
import catchAsync from "../../utils/CatchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogModel } from "../Blog/blog.model";
import { UserModel } from "../User/user.model";

const blockUser=catchAsync(async(req,res)=>{
    const {userId}=req.params;
    try{
        await UserModel.findByIdAndUpdate(userId,{
            isBlocked:'true'
        });
        res.status(200).json({
            success:true,
            message:'User blocked successfully',
            statusCode:200,
        });
    }catch(err:any){
        throw new AppError(false, 400, "Erro blocking user",err.message);
    }
});


const deleteBlog=catchAsync(async(req,res)=>{
    const {id}=req.params;
    try{
        const blog=await BlogModel.findByIdAndDelete(id);
        if(!blog){
            throw new AppError(false, 404, "Blog not found");
        }
        res.status(200).json({
            success:true,
            message:'Blog deleted successfully',
            statusCode:200,
        });
    }catch(err:any){
        throw new AppError(false, 400, "Erro deleting blog",err.message);
    }

});

export const Admincontrollers={
    blockUser,
    deleteBlog
}