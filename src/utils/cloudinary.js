import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"
import dotenv from "dotenv"
dotenv.config()


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET 
})
console.log("proceess.env",process.env.CLOUDINARY_CLOUD_NAME);
console.log("proceess.env",process.env.CLOUDINARY_API_KEY);
console.log("proceess.env",process.env.CLOUDINARY_API_SECRET);

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        const res = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        console.log("File is uploaded on Cloudinary",res);
        // console.log("result ",res.url);
        fs.unlinkSync(localFilePath)
        return res;       
    } catch (error) {
        console.log("errror", error);
        
        fs.unlinkSync(localFilePath)
        return null;
    }

}

export {uploadOnCloudinary};