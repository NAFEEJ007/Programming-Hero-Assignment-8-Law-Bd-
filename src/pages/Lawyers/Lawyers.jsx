import React, { useEffect, useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = ({data}) => {
    const [allLawyers, setAllLawyers] = useState([]);
    const [visible, setVisible] = useState(6);
    const showMoreItems = ()=>{
        setVisible((prevValue)=>prevValue+6);
    }
    return (
        <div className='max-w-7xl mx-auto mt-20'>
            <h1 className='text-4xl	font-bold text-center mb-8'>Our Best Lawyers</h1>
            <div className='mb-10'>
                <p className='text-center font-normal text-[#0F0F0F]/80'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>


<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>

{
    data.slice(0,visible).map((singleLawyer)=><Lawyer key={singleLawyer.id} singleLawyer={singleLawyer}></Lawyer> )
}

</div>


<div className='justify-center items-center flex mt-10 mb-10'>
{
    (visible < data.length && <button className="btn rounded-4xl font-bold bg-[#0EA106] text-[#ffffff] " onClick={showMoreItems}>Show All Lawyer</button>)
}
</div>




        </div>
        
    );
};

export default Lawyers;