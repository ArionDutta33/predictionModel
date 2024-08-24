import React from 'react';

const HeroText = () => {
    return (
        <h1 className="text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center py-6">
            An ML model that can <span className="text-blue-400">predict</span> plant diseases based on images
        </h1>
    );
};

export default HeroText;