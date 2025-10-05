import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});
    
// Upload an image
const uploadImage=async(localStorage)=>{
    try {
        if(!localStorage) return null;
        const response = await cloudinary.uploader.upload(localStorage)
        console.log("Successfully uploaded ",response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localStorage);
        return null;
    }
}

export {uploadImage}