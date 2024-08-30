import React from 'react';
import { FaFacebookSquare, FaPhoneSquareAlt } from 'react-icons/fa';
import { FaLinkedin, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import AnimatedDivision from '../animated_div';

export default function Contact_Section(): JSX.Element {
    return (

            <footer className=" items-center absolute bottom-0 left-0 right-0 flex pt-0 sm:pt-12 bg-neutral-900">
                <AnimatedDivision className="w-full max-w-screen-xl mx-auto px-8 pt-4 pb-2 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <p className="flex place-content-center lg:items-start mb-6 sm:mb-0 space-x-3 ">
                            <span className=" text-2xl font-semibold whitespace-nowrap text-red-1">Contact Me</span>
                        </p>

                        <ul className="flex flex-wrap items-center place-content-center text-sm lg:text-ssm font-medium text-gray-500 sm:mb-0">
                            <li className='flex items-center'>
                                <a href="tel:+94716458801" className="hover:text-white me-4 md:me-6 flex items-center"><FaPhoneSquareAlt  className='mr-2'/>Phone</a>
                            </li>
                            <li className='flex items-center'>
                                <a href="mailto:g.umesha.madushan@gmail.com" className="hover:text-white me-4 md:me-6 flex items-center"><MdEmail  className='mr-2'/>E-mail</a>
                            </li>
                            <li className='flex items-center'>
                                <a  target="_blank" href="https://lk.linkedin.com/in/umeshag" className="hover:text-white me-4 md:me-6 flex items-center"><FaLinkedin  className='mr-2'/> Linkedin</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="mt-4 border-gray-200 sm:mx-auto lg:my-8" />
                    <span className="my-3 lg:mt-0 block text-sssm md:text-sm  text-center">Designed By Umesha G. © 2024. All Rights Reserved.</span>
                </AnimatedDivision>
            </footer>

    );
};