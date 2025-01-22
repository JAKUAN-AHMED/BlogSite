import AppError from "../../errors/AppError";
import catchAsync from "../../utils/CatchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogModel } from "./blog.model";

const createBlog = catchAsync(async (req, res) => {
    // create blog
    const {title,content}=req.body;
   try{
     const blog = await BlogModel.create({
       title,
       content,
       author: req.user.id,
     });
     sendResponse(res, {
       success: true,
       message: 'Blog created successfully',
       statusCode: 201,
       data: blog,
     });
   }catch(err:any){
       throw new AppError(false, 400, "Erro creating blog",err.message);
   }
});



const updateBlog=catchAsync(async(req,res)=>{
    const {id}=req.params;
    const {title,content}=req.body;
    try{
        const blog=await BlogModel.findByIdAndUpdate    (id,{
            title,
            content
        },{new:true});
        sendResponse(res,{
            success:true,
            message:'Blog updated successfully',
            statusCode:200,
            data:blog
        });
    
    }catch(err:any){
        throw new AppError(false, 400, "Erro updating blog",err.message);
    }

});


const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await BlogModel.findByIdAndDelete(id);
    if (!blog) {
      throw new AppError(false, 404, 'Blog not found');
    }
    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully',
      statusCode: 200,
    });
  } catch (err: any) {
    throw new AppError(false, 400, 'Erro deleting blog', err.message);
  }
});


const getAllBlogs=catchAsync(async(req,res)=>{

    const {search,sortBy='createdAt',sortOrder='desc',filter}=req.query;

    try{

        const query:any={};
        if(search){
            query.$or=[ {title:{$regex:search,$options:'i'}},{content:{$regex:search,$options:'i'}}];

        }
        if(filter){
            query.author=filter;
        }
        const blogs=await BlogModel.find(query).populate('author','name email').sort({[sortBy as string]:sortOrder==='desc'?-1:1});
        sendResponse(res,{
            success:true,
            message:blogs? 'Blogs fetched successfully' : 'No blogs found',
            statusCode:200,
            data:blogs? blogs: [],
        });

        
        
    }catch(err:any){
        throw new AppError(false, 400, "Erro fetching blogs",err.message);
    }
})

export const BlogControllers=
{
    createBlog,
    updateBlog,
    deleteBlog,
    getAllBlogs
};