import Image from "next/image";
import React from "react";

const Newsletter = () => {
    return (
        <div className="py-12 bg-gradient-to-b from-[#FDFEFF] to-[#abc5ea]">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

                {/* Left Section - Logo */}
                <div className="flex-1 mb-8 md:mb-0">
                    <Image
                        src="/assets/images/flexibility.png"
                        alt="Logo"
                        width={300} // Adjust width as necessary
                        height={300} // Adjust height as necessary
                        className="object-contain hidden md:block"
                    />
                </div>

                {/* Center Section - Sign up text and form */}
                <div className="flex-1 text-center md:text-left mb-8 md:mb-0 ">
                    <h2 className="text-xl md:text-3xl font-semibold text-[#05527f] mb-4 text-center">Search Sign Up for Newsletter</h2>
                    <p className="text-sm md:text-base text-gray-600 mb-6 text-center">
                        Subscribe to our newsletter and stay informed about upcoming courses, events, and personalized recommendations for your learning journey.
                    </p>

                    <div className="flex justify-center">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="px-4 py-2 text-gray-700  bg-[#13527610] 
                            rounded-l-md focus:outline-none focus:ring-[1px] focus:ring-blue-200"
                        />
                        <button className="px-4 py-2 bg-[#135276] text-white rounded-r-md hover:bg-[#103f4d]">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Right Section - 3D Book Image */}
                <div className="flex-1 mb-8 md:mb-0">
                    <Image
                        src="/assets/images/3dbook.webp"
                        alt="3D Book"
                        width={350} 
                        height={350} 
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
