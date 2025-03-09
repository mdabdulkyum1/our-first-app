import React from 'react';
import cyberimg from '../../../public/assets/images/cybersecurity.jpg';
import Image from 'next/image';
import { FaBookmark } from "react-icons/fa";

const Popular = () => {
    return (
        <div className="bg-card lg:h-[550px] container mx-auto rounded-2xl p-6 lg:p-10">
            <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-10 py-10'>
                <div className='text-center lg:text-left lg:self-center'>
                    <h2 className='text-secondary text-3xl lg:text-4xl font-bold'>Popular certificates, new AI skills.</h2>
                    <p className='text-lg lg:text-xl font-bold mt-6'>Get job-ready with Google Professional Certificates—now including AI skills.</p>
                </div>
                <div className='mx-auto lg:mx-0'>
                    <div className='card bg-base-100 shadow-2xl'>
                        <figure className='px-4 pt-4'>
                        <Image className='rounded-2xl' width={410} height={176} src={cyberimg} alt="popular" />

                        </figure>
                        <div className='card-body'>
                            <h2 className='card-title font-bold text-lg lg:text-xl'>Google Cyber-Security</h2>
                            <div className='flex mt-2 border-2'>
                                <p className='text-2xl'><FaBookmark /></p>
                            
                                <p className='text-blue-500 font-medium text-sm lg:text-base'>Make progress towards a degree</p>
                            </div>
                            <p className='text-gray-700 text-sm lg:text-base'>Professional Certificate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;