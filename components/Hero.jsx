'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '.';

const Hero = () => {
    const text = 'Webexis:';

    return (
        <section
            id='hero'
            style={{ background: 'url("/hero-bg.png")', backgroundSize: 'cover' }}
            className='relative bg-lightBg dark:bg-darkBg text-secondary dark:text-primary py-10 md:pt-28 md:pb-24  min-h-[94vh] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[""] before:dark:bg-darkBg before:z-[-1] flex items-center justify-center'
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='container flex flex-col md:flex-row justify-center items-center mx-auto '
            >
                <div className=' md:flex-2 lg:flex-1 order-2 md:order-1 px-4'>
                    <h1 className='flex flex-wrap text-4xl lg:text-2xl xl:text-4xl mb-2'>
                        <motion.span
                            className='relative font-bold inline-block overflow-hidden'
                            initial='initial'
                            whileHover='hovered'
                        >
                            <motion.div className=''>
                                {text.split('').map((l, i) => (
                                    <motion.span
                                        key={i}
                                        aria-label='animated title webexis'
                                        className='inline-block lg:text-2xl lg:leading-[47px] xl:text-4xl'
                                        variants={{
                                            initial: {
                                                y: 0,
                                            },
                                            hovered: {
                                                y: '-120%',
                                            },
                                        }}
                                        transition={{ delay: 0.02 * i }}
                                    >
                                        {l}
                                    </motion.span>
                                ))}
                            </motion.div>
                            <motion.div className='absolute inset-0'>
                                {text.split('').map((l, i) => (
                                    <motion.span
                                        key={i}
                                        className='inline-block lg:text-2xl lg:leading-[47px] xl:text-4xl'
                                        variants={{
                                            initial: {
                                                y: '120%',
                                            },
                                            hovered: {
                                                y: 0,
                                            },
                                        }}
                                        transition={{ delay: 0.02 * i }}
                                    >
                                        {l}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.span>
                        <span
                            className=' font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#273958] to-[#3767b5] inline-block md:ml-2 lg:leading-[47px] xl:ml-0 2xl:text-4xl 2xl:ml-2'
                            style={{ color: 'transparent' }}
                        >
                            Web Design & Development
                        </span>
                        <span className='font-bold mb-2 md:mb-0 lg:mt-[-8px] lg:mb-4 xl:mt-0'>
                            Studio for Your Business.
                        </span>
                    </h1>
                    <p className='pb-8 text-base'>
                        Discover professional web design and development tailored to your needs.
                        We&apos;re your partner in creating affordable, effective digital solutions.
                    </p>
                    <Button link='/services'>Learn More</Button>
                </div>
                <div className='img flex-1 order-1 md:order-2'>
                    <Image
                        src={'/hero.png'}
                        alt='illustration of girl and boy infront of big computer monitor'
                        width={1087}
                        height={1087}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
