import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  return {
    url: "https://dummy-cloudinary-url.com/avatar.png",
  };
};

export { uploadOnCloudinary };



/*
const uploadOnCloudinary = async (localFilePath) => {
  if (!localFilePath) return null;

  try {
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { resource_type: "image", folder: "avatars" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(fs.readFileSync(localFilePath));
    });

    fs.unlinkSync(localFilePath);
    return result;
  } catch (error) {
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    return null;
  }
};
*/

  
















/*
import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';



cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME , 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath)  return null //upload the cloudinary file
        const response = await cloudinary.uploader.upload(localFilePath, {
  resource_type: "image",
  folder: "avatars"
});


        //file is successfully uploaded
        // console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath) //it remove the locally saved temporary file
        return response;

    } catch (error) {
    console.error("CLOUDINARY LOCAL UPLOAD ERROR 👉", error);
    if (fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath);
    }
    return null;
  }
}



export {uploadOnCloudinary}

*/