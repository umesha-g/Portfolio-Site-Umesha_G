import React from 'react';
import AnimatedDivision from '../animated_div';
import Image from 'next/image';
import graphic from '#/assets/services_section/graphic.jpg'
import develop from '#/assets/services_section/develop.jpg'

export default function Service_Section() {

    return (
        <div className='lg:pt-28 pt-20 container mx-auto px-4 overflow-hidden'>
            <h2 className='lg:text-6xl text-4xl font-bold mb-14 lg:mb-0 text-center lg:text-left text-red-1'>Services I Offer</h2>
            <div className='mt-10 '>

                    <div className='gap-10 pb-20 lg:pt-10 lg:px-16 mb-5 grid grid-cols-1 lg:grid-cols-2 m-5 '>

                        <AnimatedDivision className='text-left xl:m-5 border-red-1 border-l-2 flex xl:flex-row flex-col-reverse '>
                            <div className=' p-10 lg:p-14'>
                                <h1 className='text-2xl font-semibold text-neutral-400 mb-10'>Graphic Designing</h1>
                                <p className='text-lg'> Offering creative and impactful graphic design and branding consultation services, 
                                    specializing in modern designs for all brand identity elements. This includes,
                                </p>
                                <div className='p-5 pl-10 justify-between flex text-lg text-neutral-200'>
                                    <ul className='list-disc '>
                                        <li>Logos</li>
                                        <li>Brand Style Guide</li>
                                        <li>Brand Identity Kits</li>
                                        <li>Stationary Kits</li>
                                        <li>Landing Pages</li>
                                    </ul>
                                </div>
                                <p className='text-lg'>Additionally, services extend to the creation of flyers, brochures, posters, and custom orders tailored to
                                    meet specific needs. With over <span className='text-neutral-200 text-lg font-bold '>9</span> years of experience,
                                    the goal is to enhance the visual appeal and identity of each brand.
                                </p>
                            </div>

                            {/* <div className='container bg-black overflow-hidden h-40 xl:h-auto'>
                                <Image className='opacity-40' style={{height:'100%', objectFit:'cover'}} quality={100} sizes='80vw' alt="" src={graphic}></Image>
                            </div> */}
                        </AnimatedDivision>

                        <AnimatedDivision className='text-left xl:m-5 border-red-1 border-l-2 flex xl:flex-row flex-col-reverse'>
                            <div className=' p-10 lg:p-14'>
                                <h1 className='text-2xl font-semibold text-neutral-400 mb-10'>Software Developing</h1>
                                <p className='text-lg'>Providing comprehensive software development and engineering services focused on delivering innovative and efficient solutions.
                                    Key offerings include:
                                </p>
                                <div className='p-5 pl-10 justify-between flex text-lg text-neutral-200'>
                                    <ul className='list-disc'>
                                        <li>Front-end Development</li>
                                        <li>Back-end Development</li>
                                        <li>Desktop Applications</li>
                                        <li>API Integrations</li>
                                    </ul>
                                </div>
                                <p className='text-lg'>
                                    With a strong foundation in various programming languages and frameworks, the commitment is to create scalable
                                    applications that enhance user experiences and meet unique client requirements. Each project is approached with a focus
                                    on quality and impact.
                                </p>
                                </div>

                                {/* <div className='container bg-black  overflow-hidden h-44 xl:h-auto'>
                                    <Image className='opacity-40' style={{height:'100%', objectFit:'cover'}} quality={100} sizes='80vw' alt="" src={develop}></Image>
                                </div> */}
                        </AnimatedDivision>

                        {/* <AnimatedDivision className='text-justify col-span-1 bg-neutral-600 p-10 m-5'>
                            <div></div>
                        </AnimatedDivision> */}
                    </div>

            </div>
        </div>
    );

}