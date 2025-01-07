import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";

const BlogSchema=new Schema<IBlog>({
    title:{type:String},
    content:{type:String},
    author:{type:String},
    isPublished:{type:Boolean,default:true},
},{
    timestamps:true
})

export const BlogModel=model<IBlog>('blog',BlogSchema);