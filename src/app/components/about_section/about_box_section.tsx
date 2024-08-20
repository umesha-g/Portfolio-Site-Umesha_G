import React, { useState, useEffect, useRef } from 'react';

  const SkillBox = () => {


    return (
        <div className='flex lg:flex-row flex-col xl:ml-0 mt-5 xl:mt-5 xl:px-10 xl:py-20'>
          
        <div className='xl:h-64 my-3 lg:mx-5 xl:w-auto bg-neutral-600 p-8 rounded-sm'>
          <h1 className='text-2xl font-bold'>JavaScript</h1>
          <p className='mt-4'>Worked as a Freelancer in Fiverr Platform for 6 years with 4.9 Star Ratings</p>
        </div>
        <div className=' xl:h-64 my-3 lg:mx-5 xl:w-auto bg-red-1 xl:bg-neutral-600 p-8 rounded-sm'>
          <h1 className='text-2xl font-bold'>Java</h1>
          <p className='mt-4'>Worked as a Freelancer in Fiverr Platform for 6 years with 4.9 Star Ratings</p>
        </div>
        <div className='xl:h-64 my-3 lg:mx-5 xl:w-auto bg-neutral-600 p-8 rounded-sm'>
          <h1 className='text-2xl font-bold'>C</h1>
          <p className='mt-4'>Worked as a Freelancer in Fiverr Platform for 6 years with 4.9 Star Ratings</p>
        </div>
        <div className=' xl:h-64 my-3 lg:mx-5 xl:w-auto bg-red-1 p-8 rounded-sm'>
          <h1 className='text-2xl font-bold'>Python</h1>
          <p className='mt-4'>Worked as a Freelancer in Fiverr Platform for 6 years with 4.9 Star Ratings</p>
        </div>
        <div className='xl:h-64 my-3 lg:mx-5 xl:w-auto bg-neutral-600 p-8 rounded-sm'>
          <h1 className='text-2xl font-bold'>MySQL</h1>
          <p className='mt-4'>Worked as a Freelancer in Fiverr Platform for 6 years with 4.9 Star Ratings</p>
        </div> 

      </div>

    );
};

export default SkillBox;