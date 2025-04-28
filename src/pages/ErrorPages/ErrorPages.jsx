import React from 'react';
import Navbar from '../../components/Header/Navbar';
import bad_req from '../../assets/400-bad-request.png';

const ErrorPages = () => {
    return (
        <div>
            <Navbar></Navbar>
                <div className='flex justify-center items-center flex-col'>
                    <img src={bad_req} alt="" />
                    <div className='mt-5 flex justify-center items-center'>
                    <a href="/"> <span><button className='btn mb-60 bg-[#0EA106] text-[#ffffff] hover:bg-[#176AE5] hover:text-[#ffffff] border-0 '>Go To Home Page</button></span></a>
                    </div>
                    
                </div>
        </div>
    );
};

export default ErrorPages;