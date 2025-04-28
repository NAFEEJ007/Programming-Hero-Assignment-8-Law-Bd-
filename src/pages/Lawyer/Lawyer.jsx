import React from 'react';
import { PiTrademarkRegisteredLight } from "react-icons/pi";
import { Link, NavLink } from 'react-router';


const Lawyer = ({ singleLawyer }) => {
    const {id,
        name,
        license,
        experience,
        consultation_fee,
        expertise,
        image,
        details} = singleLawyer;
    // console.log(singleLawyer)
    return (


        <div className="card bg-base-100  shadow-lg">
            <div className="card-body">

                <div className='flex gap-6'>

                    <div>
                        <img className='w-40 rounded-2xl' src={image} alt="" />

                    </div>

                    {/* writing div */}
                    <div>
                        {/* button div */}
                        <div className='flex gap-2 mb-2'>
                            <button className='rounded-2xl bg-[#09982F]/10 text-[#09982F] pb-1 pt-1 pl-3 pr-3 text-xs'>Available</button>
                            <button className='rounded-2xl bg-[#176AE5]/10 text-[#176AE5] pb-1 pt-1 pl-3 pr-3 text-xs'>{experience}+ Years Experience</button>
                        </div>
                        {/* name */}

                        <div className='mb-3'>
                            <h1 className='text-xl font-semibold'>{name}</h1>
                            <p className='text-[#0F0F0F]/60 font-medium text-xs'>{expertise}</p>
                        </div>

                        {/* liscence div */}

                        <div className='border-t-1  border-dashed border-[#0F0F0F]/40'>
                            <div className='mt-4'>
                                <p className='text-[#0F0F0F]/60 font-medium text-xs flex items-center gap-2'> <span className='text-sm flex items-center'><PiTrademarkRegisteredLight /></span>{license}</p>

                               <NavLink  to = {`/lawyerDetails/${id}`}><button className='mt-3 cursor-pointer border-1 rounded-3xl border-[#176AE5]/20 text-[#176AE5] pl-10 pr-10 w-50 hover:bg-[#176AE5] hover:text-[#ffffff]'>View Details</button></NavLink> 
                            </div>

                        </div>





                    </div>


                </div>


            </div>
        </div>

    );
};

export default Lawyer;