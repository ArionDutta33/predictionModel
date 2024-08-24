import express from 'express';
import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import Prediction from "../models/prediction.js"
import {uploadCloudinary} from "../utils/cloudinary.js";

export const getPredictions = asyncHandler(async (req, res) => {
    const predictions = await Prediction.find();
    if(!predictions) {
        return res.status(404).json(new ApiError(404,"Failed to get predictions"));
    }
    return res.status(200).json(new ApiResponse(200,predictions,"Successfully retrieved all predictions"));
})

// export const createPrediction = asyncHandler(async (req, res) => {
//     try {
//         const { result } = req.body;
//         const imageFiles = req.files?.images;
//
//         if (!imageFiles || !result) {
//             return res.status(404).json(new ApiError(404, "Please enter all the fields"));
//         }
//
//         if (imageFiles.length === 0) {
//             return res.status(404).json(new ApiError(404, "Image is required"));
//         }
//
//         const sampleImage = imageFiles[0]?.path;
//
//         if (!sampleImage) {
//             return res.status(404).json(new ApiError(404, "Image is required"));
//         }
//
//         const uploadedImage = await uploadCloudinary(sampleImage);
//
//         if (!uploadedImage) {
//             return res.status(404).json(new ApiError(404, "Failed to upload image"));
//         }
//
//         const createdModel = await Prediction.create({
//             image: uploadedImage.secure_url, // Use the URL from Cloudinary response
//             result
//         });
//
//         if (!createdModel) {
//             throw new ApiError(500, "Internal server error"); // Changed status to 500 for internal errors
//         }
//
//         return res.status(201).json(new ApiResponse(201, createdModel, "Successfully created"));
//     } catch (err) {
//         console.log(err);
//         throw new ApiError(500, "Failed to create prediction");
//     }
// });







export const createPrediction=asyncHandler(async (req, res) => {
try{
    console.log("hit");
    console.log("Received files:", req.files);
    console.log("Received body:", req.body);

    const{result}=req.body;
    // if(!result) {
    //     return res.status(404).json(new ApiError(404,"Please enter all the fields"));
    // }
    // console.log(req.files);
    const sampleImage=req.files?.mainImage[0]?.path
    if(!sampleImage){
        return res.status(404).json(new ApiError(404,"Image is required"));
    }
    const uploadedImage=await uploadCloudinary(sampleImage)
    if(!uploadedImage){
        return res.status(404).json(new ApiError(404,"Image is required"));
    }
    const createdModel=await Prediction.create({
        images:uploadedImage.url,
        result
    })
    if(!createdModel){
        throw new ApiError(404,"Internal server error");
    }
    return res.status(200).json(new ApiResponse(201,createdModel,"Successfully created"));
}catch(err){
console.log(err)
    throw new ApiError(404,"Failed to create prediction");
}
})


// export const createPrediction = asyncHandler(async (req, res) => {
//     try {
//         const { result } = req.body;
//
//         // Check if any required field is missing
//         if (!result) {
//             throw new ApiError(400, 'Please enter all the fields');
//         }
//
//         const coverImage = req.files?.mainImage[0]?.path;
//         if (!coverImage) {
//             throw new ApiError(400, 'Cover image is required');
//         }
//
//         const cover = await uploadCloudinary(coverImage);
//         if (!cover) {
//             throw new ApiError(400, 'Failed to upload cover image');
//         }
//
//         // Create the new blog entry
//         const createdPrediction = await Prediction.create({ result, image: cover.url });
//
//         res.status(200).json(new ApiResponse(200, createdPrediction, "Successfully created blog"));
//     } catch (err) {
//         console.error("Error details:", err); // Log the error details
//         throw new ApiError(500, "Failed to create blog");
//     }
// });