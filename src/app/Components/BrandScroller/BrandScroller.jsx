import React from 'react';
import Marquee from 'react-fast-marquee';

const BrandScroller = () => {
  return (
    <div className="my-5 md:mt-40 md:mb-10">
      <div className=" py-3 marquee-container">
        <Marquee speed={30} gradient={false} pauseOnHover={true}>
          <img
            src="/assets/images/ibm.png"
            alt="ibm"
            className="h-11 mx-3 md:mx-8"
          />
          <img
            src="/assets/images/microsoft-logo.png"
            alt="ibm"
            className="h-11 mx-3 md:mx-8"
          />
          <img
            src="/assets/images/intel.png"
            alt="intel"
            className="h-12 mx-3 md:mx-8"
          />

          <img
            src="/assets/images/tesla-motors.png"
            alt="tesla-motors"
            className="h-20 mx-3 md:mx-8"
          />

          <img
            src="/assets/images/meta.png"
            alt="meta"
            className="h-14 mx-3 md:mx-8"
          />
          <img
            src="/assets/images/udemy.png"
            alt="udemy"
            className="h-10 mx-3 md:mx-8"
          />

          <img
            src="/assets/images/netflix.png"
            alt="netflix"
            className="h-7 mx-3 md:mx-8"
          />
          <img
            src="/assets/images/Nvidia-Logo.png"
            alt="udemy"
            className="h-20 mx-3 md:mx-8"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default BrandScroller;
