import React from 'react';
import { test_list, Testimonial } from '#/data/Test_sec_data/test_list';
import SwipeableDiv from './test_swipable_card';

export default function Testimonial_Section() {

    return (
        <div className="pt-20 lg:pt-28 ">
            <div className='container mx-auto px-8 '>
                <h2 className="lg:text-6xl text-4xl font-bold mb-10 xl:mb-28 text-center lg:text-left text-red-1">Testimonials</h2>
                <div className=' flex items-center'>
                <SwipeableDiv test_list={test_list} />
                </div>
            </div>
        </div>
    );
}