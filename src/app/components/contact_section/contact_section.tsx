import React from 'react';

export default function Contact_Section(): JSX.Element {
    return (
        <div className='flex flex-col h-96'>
            <div className='flex-1 lg:py-10 py-5'>
                <h3 className='lg:text-4xl text-3xl font-bold mb-8 text-center text-white'>Contact Me</h3>
            </div>
            <div>
                <footer className=" rounded-lg shadow  m-4">
                    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                    </div>
                        <hr className="my-6 border-thatch-green-500 sm:mx-auto lg:my-8" />
                        <span className="block text-sm text-thatch-green-500 sm:text-center ">Designed By Umesha G. © 2024 All Rights Reserved.</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};