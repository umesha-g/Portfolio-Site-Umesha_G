import React from 'react';
import NoBorderdAnimatedDivision from '../animated_div';

export default function Service_Section() {

    return (
        <div className='lg:py-28 py-20 container mx-auto px-4 overflow-hidden'>
            <h2 className='lg:text-6xl text-4xl font-bold mb-20 lg:mb-0 text-center lg:text-left text-red-1'>Services I Offer</h2>
            <div className='mt-20'>

                <NoBorderdAnimatedDivision>
                    <div>
                        <h1 className='text-2xl font-semibold  mb-10'>Graphic Designing</h1>

                    </div>
                </NoBorderdAnimatedDivision>

                <NoBorderdAnimatedDivision>
                    <div>
                        <h1 className='text-2xl font-semibold  mb-10'>Software Developing</h1>

                    </div>
                </NoBorderdAnimatedDivision>

                <NoBorderdAnimatedDivision>
                    <div>
                        <h1 className='text-2xl font-semibold  mb-10'>Branding Consultancy</h1>

                    </div>
                </NoBorderdAnimatedDivision>

            </div>
        </div>
    );

}