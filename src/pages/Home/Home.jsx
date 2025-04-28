import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Lawyers from '../Lawyers/Lawyers';
import { useLoaderData } from 'react-router';
import Counter from '../../components/Counter/Counter';


const Home = () => {
    const data = useLoaderData();
    // console.log(data)
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if (data) {
            setLoading(false);
        }
        
    },[data]);


    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    return (


<div>
            <Banner></Banner>
            <Lawyers data={data}></Lawyers>
            <Counter></Counter>
</div>


        
    );
};

export default Home;