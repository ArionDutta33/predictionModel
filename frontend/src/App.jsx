import React from 'react';
import Navbar from "./Components/Navbar.jsx";
import HeroText from "./Components/HeroText.jsx";
import ImageUpload from "./Components/ImageUpload.jsx";
import Result from "./Components/Result.jsx";
import Footer from "./Components/Footer.jsx";


const App = () => {
    return (
        <div
            className="absolute top-0 z-[-2] min-h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            <Navbar/>
            <HeroText/>
            <ImageUpload/>
            <Result/>
            <Footer/>
        </div>
    );
};

export default App;