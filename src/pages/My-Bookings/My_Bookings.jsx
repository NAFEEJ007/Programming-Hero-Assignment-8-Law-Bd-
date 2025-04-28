import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredLawyer } from '../../Utilities/addToDB';
import BookedLawyer from '../../components/BookedLawyer/BookedLawyer';
import { Tooltip } from "recharts";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)




import "./style.css";
import { FunctionComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { toast } from 'react-toastify';



const colors = scaleOrdinal(schemeCategory10).range();



const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3
        } 
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width
        }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};




const My_Bookings = () => {
    const data = useLoaderData();
    const [lawyerList, setLawyerList] = useState([]);
    const [loading, setLoading] = useState(true);


         const handleCancelAppointment = (id)=>{
             const get_id = getStoredLawyer();
            //  console.log(get_id)
             const stayingLawyer = get_id.filter(lawyerId => lawyerId != id);
             localStorage.setItem('LawyerList', JSON.stringify(stayingLawyer));
             const updatedLawyerList = lawyerList.filter(lawyer => lawyer.id !== id);
             setLawyerList(updatedLawyerList)
             toast.success("Appointment cancelled Successfully")


             MySwal.fire({
                title: "Appointment Cancelled Successfully",
                icon: "success",
                draggable: true
              });
             

         
         }         
     
    
    // console.log(lawyerList)

    // console.log(data)
    useEffect(() => {
        // console.log('use effect running')
        const storedLawyerData = getStoredLawyer();
        // console.log("Raw storedLawyerData:", storedLawyerData);
        // console.log("Data from loader:", data);
        const ConvertedStoredLawyers = storedLawyerData.map(id => parseInt(id));
        // console.log(ConvertedStoredLawyers);
        const LawyerBookingList = data.filter(lawyer => storedLawyerData.includes(lawyer.id));
        setLawyerList(LawyerBookingList);
        if (data) {
            setLoading(false);
            
        }
    }, [])

    const chartData = lawyerList.map(lawyer => ({
        name: lawyer.name,
        fee: parseFloat(lawyer.consultation_fee.replace("Taka", "").trim())
        





    }))

    if (loading) {
        return (
            <div className="flex justify-center items-center">
            <span className="loading loading-bars loading-xl"></span> 
        </div>
        );
    }





    return (



        <div className='max-w-7xl mx-auto'>

{/* {
    chartData.length < 0 &&(
        <div>
            <h1>No lawyer added</h1>
        </div>
    )
}             */}


{
    chartData.length === 0 ? (



        <div className=' text-center '>
            
        <div className='text-4xl font-bold mt-8'><h1>No Appointments Today</h1></div>

        <div className='text-base mt-6	text-[#0F0F0F] font-light mb-8'><p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p></div>


        <a href="/"><button  className='btn mb-60 bg-[#176AE5]/30 text-[#176AE5] hover:bg-[#176AE5] hover:text-[#ffffff] border-0'>Book An Appointment</button></a>

    </div>

    ):

    (<div className=' text-center '>
        <div className='text-4xl font-bold mt-8'><h1>My Todays Appointments</h1></div>
        

        <div className='text-base mt-6	text-[#0F0F0F] font-light mb-8'><p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p></div>
    </div>)

}




{
    chartData.length > 0 &&(
        <div className="chart mt-4 mb-10 flex justify-center border p-10">


        <BarChart
            width={1200}
            height={400}
            data={chartData}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={0} textAnchor="middle"/>
            <YAxis />
            <Tooltip />
            <Bar
                dataKey="fee"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
            >
                {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
            </Bar>
        </BarChart>



    </div>

    )
}



            <div className='flex flex-col gap-2'>

                {
                    lawyerList.map(l => <BookedLawyer l={l} key={l.id} handleCancelAppointment={handleCancelAppointment}></BookedLawyer>)
                    
                }

            </div>


        </div>
    );
};

export default My_Bookings;