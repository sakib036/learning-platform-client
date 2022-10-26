import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const { title} = course;
    return (
        <div>
            <div className="flex justify-center align-middle m-20 min-h-screen">
                <div className='text-center'>
                    <h1>You are Successfully Get Premium Access To This Course.</h1>
                   
                    <h2 className="card-title text-5xl py-6">Your Course Name Is -{title}</h2>
                    <p>Thanks To Checkout This Course</p>
                   
                     
                    <Link to ={`/`}><button className="btn btn-wide mt-2">GO TO HOME</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;