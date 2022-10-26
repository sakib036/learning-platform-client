import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesDetails from '../CourseDetails/CoursesDetails';
import { Link } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className='md:grid grid-cols-3 gap-4' >

            <div className=' p-6 border-amber-500'>
                {
                    courses.map(course => <p className='border-2 border-amber-500 p-3 rounded-xl mt-2' key={course.id}><Link to={`/category/${course.id}`}>{course.title}</Link>
                    </p>)
                }
            </div>


            <div className='col-span-2'>
                {
                    courses.map(course => <CoursesDetails key={course.id} course={course}></CoursesDetails>)
                }
            </div>
        </div>
    );
};

export default Courses;