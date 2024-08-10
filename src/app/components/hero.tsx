import { AiFillGithub, AiFillLinkedin, } from 'react-icons/ai';
import { TbBrandFiverr } from 'react-icons/tb';
import Image from 'next/image';
import heroImage from '@/app/UI/Images/hero/hero.png';

export default function Hero() {

    return (
      
        <div className=' lg:grid grid-cols-2 lg:min-h-screen grid-flow-col  lg:mx-10 mx-4 '>

          <div className= 'pt-5 lg:pt-0 mx-12 lg:ml-24 2xl:ml-44 lg:mx-20 lg:flex '>
            <div className='mt-20 lg:mt-56 2xl:mt-96'>

              <div className='text-center lg:text-left'>
                <h3 className='text-white lg:text-lg'>Hi, I am</h3>
                <h2 className='  leading-8 text-amber-600 text-3xl sm:text-4xl my-5'>Umesha Madushan</h2>
                <h3 className='text-white lg:text-lg'>I am Developer and Designer <br className='lg:hidden'/> from  Sri Lanka <br/>Welcome to My Portfolio Site.</h3>
              </div>

              <div className=' flex pt-5 justify-center lg:justify-start text-3xl 2xl:text-4xl text-amber-600 mb-10 lg:mb-10 ' >
                <a target="_blank" href='https://www.fiverr.com/umesha_g'><TbBrandFiverr  className=''/></a>
                <a target="_blank" href='https://lk.linkedin.com/in/umeshag'><AiFillLinkedin className='mx-6'/></a>
                <a target="_blank" href='https://github.com/umesha-g'><AiFillGithub className=''/></a>
              </div>

              <div className=' flex items-center justify-center lg:justify-start'>
                <a className="bg-amber-600 text-slate-900 px-4 py-2 rounded 2xl:px-6 2xl:py-3 2xl:text-xl" href="#">Resume</a>
              </div>

            </div>
          </div>

          <div className=' mt-25 sm:mt-0 '>
            <Image className=' ' alt="" height='1000' width='1000' src={heroImage}/>
          </div>

        </div>
   
    );

}