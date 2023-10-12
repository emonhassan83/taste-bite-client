import React, { useEffect, useState } from 'react';
import SingleSectionOne from '../SingleSectionOne/SingleSectionOne';
import './SectionOne.css'
import { popularRecipeData } from './PopularRecipeData';


const SectionOne = () => {
    return (
        <>
        <h2 className='latest-title text-2xl sm:text-3xl text-center sm:text-start font-bold mt-16 sm:mt-32'>Explore Latest Recipe</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 my-6'>
            {popularRecipeData &&
                popularRecipeData.map(singleSection => <SingleSectionOne
                key={singleSection.id}
                singleSection={singleSection}
                ></SingleSectionOne>)
            }
        </div>
        </>
    );
};

export default SectionOne;