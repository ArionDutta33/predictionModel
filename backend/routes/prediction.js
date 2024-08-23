//set up router use es6
import express from 'express';
import {createPrediction, getPredictions} from "../controllers/prediction.js";
import {upload} from "../middlewares/multer.js";

const router = express.Router();
router.get('/',getPredictions);
router.post("/",upload.fields([
    {name:"mainImage",maxCount:4}
]),createPrediction)

export default router;
