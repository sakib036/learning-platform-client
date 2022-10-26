import React from 'react';

const SingleCourse = ({ course }) => {
    const { title,picture,description,id } = course;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='w-full h-60' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;