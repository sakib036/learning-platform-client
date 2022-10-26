import React from 'react';
import bgImg from '../../assets/Images/powerful-education.jpg';
import headImg from '../../assets/Images/onlineeducation.png'
import HomeMAin from '../HomeMain/HomeMAin';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const courses = useLoaderData();
    // console.log(courses)

    return (
        <div>
            <div style={{ background: `linear-gradient(rgba(97, 96, 93, 0.8), rgba(48, 48, 47, 0.8)), url(${bgImg})`, height: '100vh', width: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <h1 className='text-white text-3xl w-2/3 mx-auto pt-5'>The availability and potential of technology makes digital learning an essential service for every people. Top-TechEdu leads on global initiatives to connect millions of young people to world-class digital solutions so they can leapfrog to a brighter future.</h1>

                <img className='w-1/2 h-fit mx-auto' src={headImg} alt="" />

            </div>
            <div className='bg-gray-500 py-10' >
                <HomeMAin key={courses.id} courses={courses}></HomeMAin>
            </div>
        </div>
    );
};

export default Home;