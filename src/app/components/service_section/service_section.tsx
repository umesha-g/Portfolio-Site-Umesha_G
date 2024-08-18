import React from 'react';
import BorderdAnimatedDivision from '../bordered_animated_div';

export default function Service_Section() {

    return (
        <div className='lg:py-28 py-20 container mx-auto px-4 overflow-hidden'>
            <h2 className='lg:text-4xl text-3xl text-thatch-green-500 font-bold mb-8 text-center'>Services I Offer</h2>

            <BorderdAnimatedDivision>
                <div>
                    <h1 className='text-2xl font-semibold  mb-10'>Graphic Designing</h1>

                </div>
            </BorderdAnimatedDivision>

            <BorderdAnimatedDivision>
                <div>
                    <h1 className='text-2xl font-semibold  mb-10'>Software Developing</h1>

                </div>
            </BorderdAnimatedDivision>

            <BorderdAnimatedDivision>
                <div>
                    <h1 className='text-2xl font-semibold  mb-10'>Branding Consultancy</h1>

                </div>
            </BorderdAnimatedDivision>

        </div>
    );

}