import React, { useState } from 'react';
import doctor from '../../assets/success-doctor.png';
import patients from '../../assets/success-patients.png';
import staff from '../../assets/success-staffs.png';
import review from '../../assets/success-review.png';
import CountUp from 'react-countup';
// import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    // const [counterState, setCounterState] = useState(false)
    return (
        <div className='max-w-7xl mx-auto mt-20 mb-20'>

            {/* <ScrollTrigger onEnter={()=> setCounterState(true)} onExit={()=> setCounterState(false)}> */}
                <div>



                    <div>
                        <div className=' text-center '>
                            <div className='text-4xl font-bold mt-8'><h1>We Provide Best Law Services</h1></div>


                            <div className='text-base mt-6	text-[#0F0F0F] font-light mb-8'><p>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.</p></div>
                        </div>
                    </div>


                    <div className='flex justify-center items-center gap-10'>

                        {/* card 1 */}
                        <div className="card w-96  shadow-sm bg-[#0F0F0F]/5">
                            <div className="card-body">
                                <div className="pic">
                                    <img src={doctor} alt="" />
                                </div>

                                <div className="writing">
                                    <h2 className='text-4xl font-bold'>
                                        <CountUp start={0} end={199} delay={0} duration={7.75}></CountUp>
                                        +</h2>
                                    <p className='text-base mt-6	text-[#0F0F0F]'>Total Lawyers</p>
                                </div>

                            </div>
                        </div>

                        {/* card2 */}

                        <div className="card w-96  shadow-sm bg-[#0F0F0F]/5">
                            <div className="card-body">
                                <div className="pic">
                                    <img src={review} alt="" />
                                </div>


                                <div className="writing">
                                    <h2 className='text-4xl font-bold'>
                                        <CountUp start={0} end={476} delay={0} duration={7.75}></CountUp>
                                    +


                                    </h2>
                                    <p className='text-base mt-6	text-[#0F0F0F]'>Total reviews</p>
                                </div>

                            </div>
                        </div>


                        {/* card3 */}

                        <div className="card w-96  shadow-sm bg-[#0F0F0F]/5">
                            <div className="card-body">


                                <div className="pic">
                                    <img src={patients} alt="" />
                                </div>


                                <div className="writing">
                                    <h2 className='text-4xl font-bold'>
                                        <CountUp start={0} end={1900} delay={0} duration={7.75}></CountUp>
                                        +</h2>
                                    <p className='text-base mt-6	text-[#0F0F0F]'>Total Cases Solved</p>
                                </div>

                            </div>
                        </div>


                        {/* card4 */}



                        <div className="card w-96  shadow-sm bg-[#0F0F0F]/5">
                            <div className="card-body">



                                <div className="pic">
                                    <img src={staff} alt="" />
                                </div>


                                <div className="writing">
                                    <h2 className='text-4xl font-bold'>
                                        <CountUp start={0} end={300} delay={0} duration={7.75}></CountUp>
                                        +</h2>
                                    <p className='text-base mt-6	text-[#0F0F0F]'>Total Stuffs</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            {/* </ScrollTrigger> */}





        </div>
    );
};

export default Counter;