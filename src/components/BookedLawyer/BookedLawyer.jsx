import React from 'react';
import { Line, LineChart } from 'recharts';
import { getStoredLawyer } from '../../Utilities/addToDB';

const BookedLawyer = ({l,handleCancelAppointment}) => {
    const { id,
        name,
        license,
        experience,
        consultation_fee,
        expertise,
        image,
        details } = l;

        // const handleCancelAppointment = (id)=>{
        //     const get_id = getStoredLawyer();
        //     console.log(get_id)
        //     const stayingLawyer = get_id.filter(lawyerId => lawyerId != id);
        //     console.log(stayingLawyer)
        
        // }         
    
      
        

    return (



        <div className='max-w-7xl mx-auto mb-4'>


            <div className="card  bg-base-100 card-md shadow-sm border-1 border-[#141414]/15 w-7xl">
                <div className="card-body ">
                    {/* name div */}
                    <div className='flex justify-between items-center flex-row mb-6'>
                        <div>
                            <h1 className='font-semibold text-lg'>{name}</h1>
                            <div className='mt-2'>
                                <p className='text-base	text-[#141414]/60'>{expertise}</p>
                            </div>
                        </div>
                        {/* right div */}

                        <div>
                            <p className='text-base	text-[#141414]/60'>Appointment Fee : {consultation_fee}</p>
                        </div>
                    </div>

                    {/* border */}
                    <div className='border-b-1 border-dashed border-[#0F0F0F]/20'>

                    </div>

                    <div className='flex justify-center'>
                        <button  onClick={()=>handleCancelAppointment(id)} className='text-lg	font-medium mt-3 cursor-pointer border-1 rounded-3xl border-[#FF0000]/20 text-[#FF0000] pl-10 pr-10  hover:bg-[#FF0000] hover:text-[#ffffff] w-full py-2'>Cancel Appointment</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default BookedLawyer;