import jwt from 'jsonwebtoken';
import AppError from "../../errors/AppError";
import catchAsync from "../../utils/CatchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserModel } from "../User/user.model";
import bcrypt from 'bcrypt';
import config from '../../config';
const register = catchAsync(async (req, res) => {   
   const {name,email,password} = req.body;
   try{
        const hashedPassword=await bcrypt.hash(password,10);
        const user = await UserModel.create({name,email,password:hashedPassword});
        sendResponse(res, {
             statusCode: 201,
             success: true,
             message: 'User registered successfully',
             data: user,
        });
   }catch(err:any){
       res.status(400).json({
              success:false,
              message:'Validation Error',
              statusCode:400,
              error:err.message,
              stack:err.stack
         });
   }

});

const login = catchAsync(async (req, res) => {  
    const {email,password} = req.body;
    try{
          const user = await UserModel
            .findOne({email})       
            .select('+password');   

            if(!user || !(await bcrypt.compare(password,user.password))){
                 throw new AppError(false,401,'Invalid credentials');
            }
            const token = jwt.sign({id:user._id,role:user.role},config.access_token_secret as string,{expiresIn:config.access_token_expires});
            res.status(200).json({
                success:true,
                message:'Login successful',
                statusCode:200,
                data:{token}
            });
        }catch(err:any)
            {
               res.status(401).json({
                success:false,
                message:'Invalid credentials',
                statusCode:401,
                error:err.message,
                stack:err.stack
               });
            }
});
export const AuthControllers={register,login};