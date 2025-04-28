import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogsData, setBlogsData] = useState();
    useEffect(()=>{
        fetch("BlogsData.json")
        .then(res=>res.json())
        .then(data=>{
            setBlogsData(data)
        })
    },[])
    if (!blogsData) {
        return <div className='justify-center items-center flex'><span className="loading loading-bars loading-xl"></span></div>
        
    }
    return (

        <div className='max-w-7xl mx-auto mt-20 mb-2'>
            
{
    blogsData.questionsAndAnswers.map((blog, index)=> <Blog key={index} blog = {blog}></Blog>)
}

        </div>
    );
};

export default Blogs;