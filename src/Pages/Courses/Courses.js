import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesDetails from '../CourseDetails/CoursesDetails';

const Courses = () => {
    const courses = useLoaderData();
    
    return (
        <div >
            {
                courses.map(course=><CoursesDetails key={course.id} course={course}></CoursesDetails>)
            }
        </div>
    );
};

export default Courses;