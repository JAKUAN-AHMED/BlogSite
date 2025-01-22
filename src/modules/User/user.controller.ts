import catchAsync from "../../utils/CatchAsync";
import { UserModel } from "./user.model";

export const getAllUsers = catchAsync(async (req, res) => {
    const users=await UserModel.find();
  res.status(200).json({
    success: true,
    message: users? "All users fetched" : "No users found",
    statusCode: 200,
    data:users? users: [],
  });
});

export const getUser = catchAsync(async (req, res) => {
    const {id}=req.params;
    const user=await UserModel.findById(id);
  res.status(200).json({
    success: true,
    message: "User fetched",
    statusCode: 200,
    data:user,
  });
});