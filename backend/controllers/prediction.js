import express from 'express';
import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import Prediction from "../models/prediction.js"

export const getPredictions = asyncHandler(async (req, res) => {
    const predictions = await Prediction.find();
    if(!predictions) {
        return res.status(404).json(new ApiError(404,"Failed to get predictions"));
    }
    return res.status(200).json(new ApiResponse(200,predictions,"Successfully retrieved all predictions"));
})