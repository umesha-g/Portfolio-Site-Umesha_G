import React from 'react';
import { AiFillGithub, AiFillLinkedin, } from 'react-icons/ai';
import { TbBrandFiverr } from 'react-icons/tb';
import AnimatedDivision from '../animated_div';
import heroImage1 from '#/assets/hero_section/DSC_08791114414.png';
import heroImage2 from '#/assets/hero_section/DSC_087911165858.png';
import Image from 'next/image';
import styles from './hero.module.css';
import TestCard from './test_card';
import { test_list, Testimonial } from '#/data/Test_sec_data/test_list';

export default function Testimonial_Section() {

    return (
            <div className="lg:py-28 py-20">
                <div className='container mx-auto px-8 '>
                    <h2 className="lg:text-6xl text-4xl font-bold mb-20 lg:mb-0 text-center lg:text-left text-red-1">Testimonials</h2>
                    <AnimatedDivision className='mt-20'>
                    {test_list.map((Testimonial: Testimonial, index: number) => (
                        <TestCard key={index} {...Testimonial} />
                    ))}
                    </AnimatedDivision>
                </div>
            </div>
    );
}