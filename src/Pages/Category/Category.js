import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Category = () => {
    const course = useLoaderData();
    const { title, picture, description, details, language, cordinator,id } = course;
    return (
        <div>
            <div className="card card-compact my-10 md:w-2/3 mx-auto bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <div>
                        <p> CourseTeacher :{cordinator}</p>
                        <p>Language Of the Course :{language}</p>
                    </div>
                    <p>{description}</p>
                    <div >
                        <p>{details}</p>
                    </div>
                    <Link to ={`/category/checkout/${id}`}><button className="btn btn-wide">Premium Access to Get Offer</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;