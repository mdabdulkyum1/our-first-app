import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center  px-2 py-4 container mx-auto'>
            <h1 className='text-3xl font-bold'>Debug Hunter</h1>
            <ul className='text-xl font-bold flex gap-4'>   
                <li>Home</li>
                <li>Services</li>
                <li>Support</li>
            </ul>
        </div>
    );
};

export default Navbar;