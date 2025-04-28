import React from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router';
import { PiTrademarkRegisteredLight } from "react-icons/pi";
import { addToStoredDB } from '../../Utilities/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';
import Error2 from './Error2/Error2';

const MySwal = withReactContent(Swal)


const My_Bookings = () => {
    const { id } = useParams()
    
    const data = useLoaderData();
    const IndividualLawyer = data.find(lawyer => lawyer.id === id);
    // console.log(IndividualLawyer);

    const handleBookAppointment = id =>{


        Swal.fire({
            title: "Appointment Booked Successfully!",
            icon: "success",
            draggable: true
          });


        addToStoredDB(id)
    }

    const {
        name,
        license,
        experience,
        consultation_fee,
        expertise,
        image,
        availability,
        details } = IndividualLawyer;




    return (
        <div className='border-t-1 border-[#0F0F0F]/15 '>

            <div className='max-w-7xl mx-auto border-1 border-[#0F0F0F]/15 rounded-2xl mt-5 overflow-hidden'>
                {/* lawyer details */}
                <div className='bg-[#0F0F0F]/5 card  card-md shadow-sm text-center p-20 '>
                    <h1 className='text-[#141414] text-3xl	font-bold'>Lawyer’s Profile Details</h1>
                    <p className='text-[#141414]/70 mt-8'>{details}</p>
                </div>

            </div>




            <div className='max-w-7xl mx-auto border-1 border-[#0F0F0F]/15 rounded-2xl mt-5 overflow-hidden'>
                {/* lawyer details */}


                <div className='flex gap-8 items-center p-20'>

                    <div>
                        <img className='w-60 rounded-2xl' src={image} alt="" />

                    </div>

                    {/* writing div */}
                    <div className='flex flex-col gap-5'>
                        {/* button div */}
                        <div className='flex gap-2 mb-2'>
                            <button className='rounded-2xl bg-[#176AE5]/10 text-[#176AE5] pb-1 pt-1 pl-3 pr-3 text-xs'>{experience}+ Years Experience</button>
                        </div>
                        {/* name */}

                        <div className='mb-4'>
                            <h1 className='text-xl font-semibold'>{name}</h1>


                            <div className='flex items-center gap-3 mt-4'>
                                <p className='text-[#0F0F0F]/60 font-medium text-xs'>{expertise}</p>
                                <p className='text-[#0F0F0F]/60 font-medium text-xs flex items-center gap-2'> <span className='text-sm flex items-center'><PiTrademarkRegisteredLight /></span>{license}</p>

                            </div>

                            <div className='flex gap-4 mt-5'>
                                <span className='text-[#141414]/70 font-semibold text-base flex gap-2'>Availability: </span>
                                <span className='flex gap-2'>
                                    {
                                        availability.map((days, index) => <button className='rounded-2xl bg-[#FFA000]/10 text-[#FFA000] pb-1 pt-1 pl-3 pr-3 text-xs' key={index}>{days}</button>)
                                    }
                                </span>


                            </div>
                            <div className='mt-4'>
                                <span className='text-[#141414]/70 font-semibold text-base flex gap-2'>Consultation Fee: <h1 className='text-[#0EA106]'>{consultation_fee}</h1></span>
                            </div>

                        </div>

                        {/* liscence div */}






                    </div>


                </div>

            </div>






            <div className='max-w-7xl mx-auto border-1 border-[#0F0F0F]/15 rounded-2xl mt-5 overflow-hidden mb-12'>
                {/* lawyer details */}
                <div className=' card  card-md shadow-sm text-center p-20 '>

                    <div className='text-center text-2xl font-bold mb-4'>
                        <h1>Book an Appointment</h1>
                    </div>

                    <div className='border-t-1 border-dashed border-[#141414]/20 mb-8'>

                    </div>

                    <div className='flex  justify-around gap-80'>
                        <div className='text-base font-bold'>Availabilty</div>
                        <button className='rounded-2xl bg-[#09982F]/10 text-[#09982F] pb-1 pt-1 pl-3 pr-3 text-xs font-medium'>Lawyer Available Today</button>
                    </div>



                    <div className='border-t-1 border border-[#141414]/20 mb-6 mt-6'>

                    </div>

                    <div>
                        <button className='bg-[#FFA000]/10 text-[#FFA000] text-sm px-5 py-1 rounded-3xl'>ⓘ Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</button>
                    </div>

                    <div className='mt-8'>
                    <NavLink  to = {`/My_Bookings`}><button onClick={()=>handleBookAppointment(id)} className='btn cursor-pointer bg-[#0EA106] text-[#FFFFFF]  px-8 rounded-3xl w-4xl text-lg py-2	font-semibold'>Book Appointment Now</button></NavLink>
                    </div>



                </div>

            </div>


        </div>






    );
};

export default My_Bookings;