// Footer.jsx
import React from 'react';

const teamMembers = [
    'Member1', 'Member2', 'Member3', 'Member4', 'Member5', 'Member6'

];

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-12">
            <div className="text-center font-medium text-xl text-gray-300 mb-2">
                Team Members
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 bg-gray-700 p-4">
                {teamMembers.map((member, index) => (
                    <span
                        key={index}
                        className="text-center text-gray-300 px-4 py-2 rounded bg-gray-600 hover:bg-gray-500 transition-colors text-sm md:text-base lg:text-lg"
                    >
                        {member}
                    </span>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
