'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '.';
import Link from 'next/link';

const Hero = () => {
    return (
        <section
            id='hero'
            className='relative bg-lightBg dark:bg-darkBg text-secondary dark:text-primary py-10 md:pt-28 md:pb-24  min-h-[94vh] flex items-center justify-center'
        >
            <Image
                priority
                src={'/hero-bg.png'}
                fill
                quality={90}
                alt='webexis wave background'
                className='object-cover '
            />

            <Link
                href='#usp'
                className='absolute hidden md:block bottom-[30px] left-1/2 transform translate-x-[-50%] w-[30px] h-[30px] cursor-pointer'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                    className='fill-accent animate-bounce'
                >
                    <path d='M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z' />
                </svg>
            </Link>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='container flex flex-col lg:flex-row justify-between items-center mx-auto z-10'
            >
                <div className=' lg:w-[45%] order-2 lg:order-1 px-4'>
                    <h1 className='text-4xl lg:text-6xl font-bold mt-4 lg:mt-0 mb-4'>
                        Custom Websites for Your Business by{' '}
                        <span className='bg-clip-text bg-gradient-to-br from-[#2d4164] to-[#3767b5]  text-accent/0'>
                            WebExis
                        </span>
                    </h1>
                    <p className='pb-8 text-base'>
                        Discover affordable website design and development services crafted to meet
                        your business needs. As a leading web design company and web development
                        firm, we specialize in delivering professional, affordable websites and
                        custom website design packages, ensuring your digital presence is effective
                        and engaging.
                    </p>
                    <Button link='/services'>Explore Our Services</Button>
                </div>
                <div className='lg:w-[55%] order-1 lg:order-2 '>
                    <Image
                        src={'/home-hero.png'}
                        alt='illustration of service worker talking to developer for website design'
                        width={850}
                        height={565}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
