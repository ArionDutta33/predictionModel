import React from 'react';
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className=" px-6 py-6 flex justify-between">
            <div className="logo text-xl font-bold">Logo</div>
            <div className="logo flex gap-4" >
                <button className="bg-blue-400 px-3 rounded-md hover:bg-blue-600">Github</button>
                <FaGithub size={35} />

            </div>
        </div>
    );
};

export default Navbar;