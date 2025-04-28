import React from 'react';
import banner from '../../assets/banner-img-1.png';

const Banner = () => {
    return (


<div className="hero h-[500px] max-w-7xl mx-auto rounded-3xl overflow-hidden" style={{backgroundImage:`url(${banner})`,}}>
  <div className=""></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="w-5xl font-bold">
      
      <p className="mb-11 text-5xl ">
      It avoids subjective claims or exaggeration that might raise red flags legally
      </p>


        <span className='mt-5'><p className='text-base font-light text-[#ffffff]/70'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p></span>

    </div>

  </div>
  
</div>




    );
};

export default Banner;