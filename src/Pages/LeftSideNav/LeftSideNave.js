import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNave = () => {
    const [categories, setCategories] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
 

    },[])
    return (
        <div>
            <h1>Total No of Category {categories.length}</h1>
           <div className='text-white p-6 border-amber-500'>
           {
                categories.map(category=><p className='border-2 border-amber-500 p-3 rounded-xl mt-2' key={category.id}><Link to={`/category/${category.id}`}>{category.title}</Link>
                </p>)
            }
           </div>
        </div>
    );
};

export default LeftSideNave;