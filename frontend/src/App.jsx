import React from 'react';
import Navbar from './Components/Navbar';
import HeroText from './Components/HeroText';
import ImageUpload from './Components/ImageUpload';
import Result from './Components/Result';
import Footer from './Components/Footer';

const App = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
                <HeroText />
                <ImageUpload />
                <Result />
            </main>
            <Footer />
        </div>
    );
};

export default App;