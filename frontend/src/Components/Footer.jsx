import React from 'react';

const Footer = () => {
    return (
        <div className="footer mt-8 bg-zinc-600  border-t-[1px]  ">
            <div className="text-center py-4 px-2 font-medium text-xl text-zinc-300">Team Members</div>
            <div className="members   border-gray-200 px-6 py-6 justify-around gap-4  flex flex-wrap">
                <span>Member1</span>
                <span>Member1</span>
                <span>Member1</span>
                <span>Member1</span>
                <span>Member1</span>
                <span>Member1</span>
            </div>
        </div>
    );
};

export default Footer;