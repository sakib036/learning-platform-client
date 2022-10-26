import React from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';

const CardSide = ({courses}) => {
    return (
        <div className='grid grid-cols-2 gap-4'>
           
            {
                courses.map(course=><SingleCourse key={course.id} course={course}></SingleCourse>)
            }
            
        </div>
    );
};

export default CardSide;