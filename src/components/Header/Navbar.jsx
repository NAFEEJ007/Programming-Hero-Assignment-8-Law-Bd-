import React from 'react';
import logo from '../../assets/logo.png'
import "../../pages/Root/Root.css";
import { NavLink } from 'react-router';



const links = <>

<NavLink to="/"className={({ isActive }) => isActive ? "underline text-[#176AE5] font-bold" : "text-[#0f0f0f]/70"}><li className='m-2 cursor-pointer'>Home</li></NavLink>
    <NavLink to = '/lawyerDetails/:id'></NavLink>
    <NavLink to = '/My_Bookings' className={({ isActive }) => isActive ? "underline text-[#176AE5] font-bold" : "text-[#0f0f0f]/70"}><li className='m-2 cursor-pointer'>My-Bookings</li></NavLink>
    <NavLink to = '/Blogs' className={({ isActive }) => isActive ? "underline text-[#176AE5] font-bold" : "text-[#0f0f0f]/70"}><li className='m-2 cursor-pointer'>Blogs</li></NavLink>
    <NavLink to = '/Contact_us' className={({ isActive }) => isActive ? "underline text-[#176AE5] font-bold" : "text-[#0f0f0f]/70"}><li className='m-2 cursor-pointer'>Contact Us</li></NavLink>
</>

const Navbar = () => {
    return (





        <div className="navbar bg-base-100  max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                {/* Logo is here */}
                <a className="text-xl flex items-center gap-2 cursor-pointer">

                    <span><img src={logo} /></span> <span className='text-3xl text-[#0F0F0F]/80 font-extrabold'>Law.BD</span>

                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base  gap-5 text-[#0f0f0f]/70 font-medium">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn rounded-4xl font-bold bg-[#0EA106] text-[#ffffff]">Contact Now</a>
            </div>
        </div>





    );
};

export default Navbar;