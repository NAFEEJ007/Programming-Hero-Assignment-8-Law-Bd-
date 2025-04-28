import React from 'react';
import logo_footer from '../../assets/logo-footer.png';
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from 'react-router';










const Footer = () => {
    return (


        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-20 flex flex-col justify-center items-center">


            <div className='justify-center items-center flex'>
                <span><img src={logo_footer} alt="" /></span>
                <span className='text-3xl text-[#FFFFFF] font-extrabold'>Law.BD</span>
            </div>
            <div>

                <ul className="menu menu-horizontal px-1 text-lg font-medium gap-5 text-[#ffffff]/70">

                <NavLink to="/"className={({ isActive }) => isActive ? "rounded xl underline decoration-2 bg-[#ffffff] text-[#000000] font-bold"  : "text-[#ffffff]"}><li className='m-2 cursor-pointer'>Home</li></NavLink>
                <NavLink to = '/My_Bookings' className={({ isActive }) => isActive ? "rounded xl underline decoration-2 bg-[#ffffff] text-[#000000] font-bold"  : "text-[#ffffff]"}><li className='m-2 cursor-pointer'>My-Bookings</li></NavLink>  
                <NavLink to = '/Blogs' className={({ isActive }) => isActive ? "rounded xl underline decoration-2 bg-[#ffffff] text-[#000000] font-bold"  : "text-[#ffffff]"}><li className='m-2 cursor-pointer'>Blogs</li></NavLink>
                <NavLink to = '/Contact_us' className={({ isActive }) => isActive ? "rounded xl underline decoration-2 bg-[#ffffff] text-[#000000] font-bold"  : "text-[#ffffff]"}><li className='m-2 cursor-pointer'>Contact Us</li></NavLink>    

                </ul>

            </div>



            <div className='border-t-1 border-dashed border-[#ffffff]/40 mt-4'>
                <ul className='flex items-center justify-center gap-10 mt-10'>
                <a href="https://www.facebook.com" target="_blank"><li className='text-3xl'><FaFacebook /></li></a>
                <a href="https://x.com/" target="_blank"><li className='text-3xl'><BsTwitterX /></li></a>
                <a href="https://www.linkedin.com/" target="_blank"><li className='text-3xl'><FaLinkedin /></li></a>
                <a href="https://www.youtube.com/" target="_blank"><li className='text-5xl'>  <FaYoutube /></li></a>
                </ul>
            </div>


        </footer>




    );
};

export default Footer;