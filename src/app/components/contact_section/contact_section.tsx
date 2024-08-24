import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare, FaPhoneSquareAlt } from 'react-icons/fa';
import { FaLinkedin, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export default function Contact_Section(): JSX.Element {
    return (

            <footer className=" mb-4 mx-4 items-center flex pt-12 sm:pt-14">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <p className="flex items-center mb-8 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-red-1">Contact Me</span>
                        </p>

                        <ul className="flex flex-wrap items-center mb-4 text-sm font-medium text-gray-500 sm:mb-0">
                            <li className='flex items-center'>
                                <a href="tel:+94716458801" className="hover:text-red-1 me-4 md:me-6 flex"><FaPhoneSquareAlt size={20} className='mr-2'/>Phone</a>
                            </li>
                            <li className='flex items-center'>
                                <a href="mailto:g.umesha.madushan@gmail.com" className="hover:text-red-1 me-4 md:me-6 flex items-center"><MdEmail size={24} className='mr-2'/>E-mail</a>
                            </li>
                            <li className='flex items-center'>
                                <a  target="_blank" href="https://lk.linkedin.com/in/umeshag" className="hover:text-red-1 me-4 md:me-6 flex"><FaLinkedin size={20} className='mr-2'/> Linkedin</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <span className="block text-sm  text-center">Designed By Umesha G. © 2023. All Rights Reserved.</span>
                </div>
            </footer>

    );
};