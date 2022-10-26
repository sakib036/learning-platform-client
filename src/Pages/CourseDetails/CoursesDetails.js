import React from 'react';

const CoursesDetails = ({ course }) => {
    const { title, picture, description, details, language, cordinator } = course;
    return (
        <div>
            
            <div className="col-span-2 card card-compact my-10 md:w-2/3 mx-auto bg-base-100 shadow-xl">
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
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;