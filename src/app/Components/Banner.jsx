import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-5 h-full lg:min-h-screen bg-[#135276] rounded-b-[50px] md:items-center p-5 md:px-10 mb-14 lg:mb-32">
        {/* Support  */}
        <div className="hidden absolute -bottom-28 left-1/2 transform -translate-x-1/2 w-9/12 lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 1st Box  */}
          <div className="bg-[#eef8ff] h-48 shadow-xl rounded-2xl flex flex-col justify-center items-center gap-4">
            <div className="bg-[#abd1e8] p-4 rounded-full">
              <Image
                src="/assets/icons/flexibility.webp"
                alt="Logo"
                width={70}
                height={30}
              />
            </div>
            <p className="font-bold text-sm">FLEXIBILITY</p>
          </div>

          {/* 2nd Box  */}
          <div className="bg-[#eef8ff] h-48 shadow-xl rounded-2xl flex flex-col justify-center items-center gap-4">
            <div className="bg-[#abd1e8] p-4 rounded-full">
              <Image
                src="/assets/icons/support.webp"
                alt="Logo"
                width={70}
                height={30}
              />
            </div>
            <p className="font-bold text-sm">24/7 HELPLINE</p>
          </div>

          {/* 3rd Box  */}
          <div className="bg-[#eef8ff] h-48 shadow-xl rounded-2xl flex flex-col justify-center items-center gap-4">
            <div className="bg-[#abd1e8] p-4 rounded-full">
              <Image
                src="/assets/icons/SECURE-CHECKOUT.webp"
                alt="Logo"
                width={70}
                height={30}
              />
            </div>
            <p className="font-bold text-sm">SECURE CHECKOUT</p>
          </div>

          {/* 4th Box  */}
          <div className="bg-[#eef8ff] h-48 shadow-xl rounded-2xl flex flex-col justify-center items-center gap-4">
            <div className="bg-[#abd1e8] p-4 rounded-full">
              <Image
                src="/assets/icons/FREE-ACCESS.webp"
                alt="Logo"
                width={70}
                height={30}
              />
            </div>
            <p className="font-bold text-sm">FREE ACCESS</p>
          </div>
        </div>
        {/* Text Section */}
        <div className="space-y-5 lg:space-y-7 text-white order-2 lg:order-1">
          <h5 className="text-lg font-bold">WELCOME TO</h5>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold">
            LEARN<span className="text-[#ed626a]">I</span>CA
          </h1>
          <p>
            Join thousands of learners on their journey to mastering new skills
            and achieving their goals. Explore courses designed by experts and
            start learning today!
          </p>

          <button className="btn text-white text-lg font-bold bg-[#f87171]">
            Explore Courses
          </button>
        </div>
        {/* Image Section */}
        <div className="relative w-full h-[300px] md:h-[500px]  order-1 lg:order-2">
          <Image
            src="/assets/images/courseui.webp"
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Support  */}
      <div className="lg:hidden  w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {/* 1st Box  */}
        <div className="bg-[#eef8ff] h-48 shadow-xl rounded-2xl flex flex-col justify-center items-center gap-4">
          <div className="bg-[#abd1e8] p-4 rounded-full">
            <Image
              src="/assets/icons/flexibility.webp"
              alt="Logo"
              width={70}
              height={30}
            />
          </div>
          <p className="font-bold text-sm">FLEXIBILITY</p>
        </div>

        {/* 2nd Box  */}
        <div className="bg-[#eef8ff] h-48 shadow-xl rounded-2xl flex flex-col justify-center items-center gap-4">
          <div className="bg-[#abd1e8] p-4 rounded-full">
            <Image
              src="/assets/icons/support.webp"
              alt="Logo"
              width={70}
              height={30}
            />
          </div>
          <p className="font-bold text-sm">24/7 HELPLINE</p>
        </div>

        {/* 3rd Box  */}
        <div className="bg-[#eef8ff] h-48 shadow-xl rounded-2xl flex flex-col justify-center items-center gap-4">
          <div className="bg-[#abd1e8] p-4 rounded-full">
            <Image
              src="/assets/icons/SECURE-CHECKOUT.webp"
              alt="Logo"
              width={70}
              height={30}
            />
          </div>
          <p className="font-bold text-sm">SECURE CHECKOUT</p>
        </div>

        {/* 4th Box  */}
        <div className="bg-[#eef8ff] h-48 shadow-xl rounded-2xl flex flex-col justify-center items-center gap-4">
          <div className="bg-[#abd1e8] p-4 rounded-full">
            <Image
              src="/assets/icons/FREE-ACCESS.webp"
              alt="Logo"
              width={70}
              height={30}
            />
          </div>
          <p className="font-bold text-sm">FREE ACCESS</p>
        </div>
      </div>
    </>
  );
};

export default Banner;