import mongoose from 'mongoose';
const predictionSchema = new mongoose.Schema({
    images: {
        type: String,
        required: true,
    },
    result: {
        type: String,
        // required: true,
    }
}, { timestamps: true })

//write es6 export
export default mongoose.model('Prediction', predictionSchema);