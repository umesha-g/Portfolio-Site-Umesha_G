import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare, FaPhoneSquareAlt } from 'react-icons/fa';
import { FaLinkedin, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export default function Contact_Section(): JSX.Element {
    return (
        <div className='flex flex-col h-96'>
            <div className='flex-1 xl:py-10 py-5'>
                <h3 className='lg:text-4xl text-3xl font-bold mb-4 lg:mb-8 text-center text-red-1'>Contact Me</h3>
            </div>

            <div className='flex flex-col lg:flex-row text-bunker-200 items-start lg:justify-between ml-16 lg:px-96 lg:h-20 h-40 '>
                <span className='flex justify-center items-center mb-5 xl:mb-0 lg:mx-10'><MdEmail className='mr-5' size={29} /><h4 className='lg:w-44'><Link href='mailto:g.umesha.madushan@gmail.com'>E - Mail</Link></h4></span>
                <span className='flex justify-center items-center mb-5 xl:mb-0 lg:mx-10'><FaPhoneSquareAlt className='mr-5' size={28} /><h4 className='lg:w-36'><Link href="tel:+94716458801">(+94) 716-458-801</Link></h4></span>
                <span className='flex justify-center items-center mb-5 xl:mb-0 lg:mx-10'><FaLinkedin className='mr-5' size={28} /><h4 className='lg:w-36'><Link href='/'>LinkedIn</Link></h4></span>
                <span className='flex justify-center items-center mb-5 xl:mb-0 lg:mx-10'><FaFacebookSquare className='mr-5' size={28} /><h4 className='lg:w-36'><Link href='/'>Facebook ?</Link></h4></span>
            
            </div>
            <div className=''>
                <footer className=" rounded-lg  m-4">
                    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                    </div>
                        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
                        <span className="block text-sm text-red-1 text-center ">Designed By Umesha G. © 2024 All Rights Reserved.</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};