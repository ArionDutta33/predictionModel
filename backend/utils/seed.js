import mongoose from 'mongoose';
import Prediction from '../models/prediction.js'; // Update with the correct path to your model

const seedPredictions = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb://127.0.0.1:27017/predictionDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Clear existing data
        await Prediction.deleteMany({});

        // Seed data
        const predictions = [
            {
                images: 'http://example.com/image1.jpg',
                result: 'Powdery Mildew: A fungal disease causing white powdery spots on leaves.',
            },
            {
                images: 'http://example.com/image2.jpg',
                result: 'Rust: A fungal disease causing reddish-brown pustules on leaves.',
            },
            {
                images: 'http://example.com/image3.jpg',
                result: 'Blight: A bacterial disease causing dark, sunken lesions on fruits and leaves.',
            },
            {
                images: 'http://example.com/image4.jpg',
                result: 'Leaf Spot: A fungal disease causing circular spots on leaves.',
            },
            {
                images: 'http://example.com/image5.jpg',
                result: 'Downy Mildew: A fungal disease causing yellow spots and downy growth on the underside of leaves.',
            },
            {
                images: 'http://example.com/image6.jpg',
                result: 'Anthracnose: A fungal disease causing dark, sunken lesions on fruits and stems.',
            },
            {
                images: 'http://example.com/image7.jpg',
                result: 'Fusarium Wilt: A soil-borne fungal disease causing wilting and yellowing of leaves.',
            },
            {
                images: 'http://example.com/image8.jpg',
                result: 'Septoria Leaf Spot: A fungal disease causing small, dark spots with yellow halos on leaves.',
            },
            {
                images: 'http://example.com/image9.jpg',
                result: 'Sclerotinia Rot: A fungal disease causing a white, fluffy mold on stems and leaves.',
            },
            {
                images: 'http://example.com/image10.jpg',
                result: 'Bacterial Blight: A bacterial disease causing water-soaked lesions on leaves and stems.',
            },
            {
                images: 'http://example.com/image11.jpg',
                result: 'Cercospora Leaf Spot: A fungal disease causing grayish spots with dark borders on leaves.',
            },
            {
                images: 'http://example.com/image12.jpg',
                result: 'Viruses: Various plant viruses causing mosaic patterns, leaf curling, and stunted growth.',
            },
            {
                images: 'http://example.com/image13.jpg',
                result: 'Powdery Scab: A fungal disease causing powdery white growth on tubers and roots.',
            },
            {
                images: 'http://example.com/image14.jpg',
                result: 'Charcoal Rot: A fungal disease causing black, sunken lesions on roots and stems.',
            },
            {
                images: 'http://example.com/image15.jpg',
                result: 'Nematode Damage: Damage caused by soil-dwelling nematodes leading to root knots and reduced growth.',
            },
        ];


        // Insert seed data
        await Prediction.insertMany(predictions);

        console.log('Seed data inserted successfully');

        // Close the connection
        await mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding data:', error);
    }
};

// Run the seed function
seedPredictions();
