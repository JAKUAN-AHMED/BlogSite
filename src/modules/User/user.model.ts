import { model, Schema } from "mongoose";
import { fullName, IUser, IUserModel } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";


// ?password change pre hook not written yet


const userNameSchema=new Schema<fullName>({
    firstName:{type:String},
    middleName:{type:String},
    lastName:{type:String},
})
const userSchema = new Schema<IUser>({
  name: userNameSchema,
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true ,select:0},
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  isBlocked: { type: Boolean, default: false },
  isDeleted:{type:Boolean,default:false}
},{
    timestamps:true
});
userSchema.pre('save', async function (next) {
  const currentUser = this; //doc
  currentUser.password = await bcrypt.hash(
    currentUser.password,
    Number(config.brcypt_salt_rounds),
  );
  next();
});

//set ' ' after saving password
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});
// userSchema.statics.isUserExistById = async function (id: string) {
//   return this.findById(id).select('+password');
// };

//check if user is deleted
// userSchema.statics.isDeletedUser = async function (id: string) {
//   const isDeleted = await this.findOne({ _id:id, isDeleted: true });
//   return isDeleted;
// };

//check the user status
// userSchema.statics.UserStatus = async function (id: string) {
//   const user = await this.findOne({ _id:id, isBlocked: 'blocked' });
//   return user;
// };

//check is password match
// userSchema.statics.isPasswordMatch = async function (
//   password: string,
//   storedHashedPassword: string,
// ) {
//   return bcrypt.compare(password, storedHashedPassword);
// };

//user check by email

// userNameSchema.statics.isUserExistByEmail=async function(email:string){
//   return await this.findOne({email});
// }
export const UserModel=model<IUser,IUserModel>('user',userSchema);