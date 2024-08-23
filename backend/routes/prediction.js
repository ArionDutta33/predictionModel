//set up router use es6
import express from 'express';
import {getPredictions} from "../controllers/prediction.js";


const router = express.Router();
router.get('/',getPredictions);

export default router;
