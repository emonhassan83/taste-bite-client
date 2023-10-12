import React, { useEffect, useState } from 'react';
import SingleCategory from '../SingleCategory/SingleCategory';
import './Category.css'

const Category = () => {
    const [categoryData, setCategoryData] = useState('');
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/allData`)
        .then(response=> response.json())
        .then(data => setCategoryData(data))
    }, [])
    //console.log(categoryData);
    return (
        <div className='mt-12 sm:mt-28'>
            <h2 className='category-title text-2xl sm:text-3xl font-bold my-5 text-center sm:text-start'>Hand-Picked Collection</h2>
           <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4 w-full'>
           {
            categoryData &&
                categoryData.map(singleData => <SingleCategory
                key={singleData._id}
                singleData={singleData}
                ></SingleCategory>)
            }
           </div>
        </div>
    );
};

export default Category;