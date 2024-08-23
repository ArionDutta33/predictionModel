import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import {ApiError} from "./ApiError.js";
// Configuration
cloudinary.config({
    cloud_name:"dmwnjx5jm",
    api_key: "426996165889857",
    api_secret: "WFAX-cUrW0swLpneGGY37rltVQI",
});

const uploadCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        // Remove the local file after upload
        fs.unlinkSync(localFilePath);

        return response;
    } catch (error) {
        console.error("Cloudinary upload error:", error); // Log the error details
        // Remove the local file even if upload fails
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        throw new ApiError(400, 'Failed to upload cover image');
    }
}

export { uploadCloudinary };