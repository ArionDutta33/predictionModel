import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-transparent px-4 py-4 sm:px-6 sm:py-6">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Logo</h1>
                <div className="flex gap-4 items-center">
                    <button className="bg-blue-400 px-3 py-2 rounded-md hover:bg-blue-600 text-white">Github</button>
                    <FaGithub size={30} className="text-white" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;