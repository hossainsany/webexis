'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '.';

const ServicesSection = ({ imgFirst, img, title, text, url, i, bgAlt }) => {
    return (
        <section
            className={`py-24 md:py-0 overflow-hidden text-secondary dark:text-primary ${
                bgAlt ? 'bg-lightBg dark:bg-darkBg ' : 'bg-light-tertiary dark:bg-tertiary'
            }`}
        >
            <div className='flex flex-col md:flex-row mx-auto px-4 md:px-0'>
                <div
                    className={`flex-1 flex flex-col justify-center items-center ${
                        imgFirst ? 'order-2' : 'order-2 md:order-1'
                    }`}
                >
                    <div className='px-4 lg:px-8 xl:px-16 2xl:px-24'>
                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                ease: 'easeInOut',
                                delay: 0.1,
                            }}
                            className='text-3xl font-bold mb-6'
                        >
                            {title}
                        </motion.h2>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                ease: 'easeInOut',
                                delay: 0.2,
                            }}
                            className='mb-7 text-base font-medium'
                        >
                            {text}
                        </motion.p>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                ease: 'easeInOut',
                                delay: 0.3,
                            }}
                        >
                            <Button link='/contact'>Learn More</Button>
                            {/*replace with {url} slug letter*/}
                        </motion.div>
                    </div>
                </div>
                <div
                    className={`flex-1 w-full h-[600px] mb-6 md:mb-0 rounded-md overflow-hidden md:rounded-none  ${
                        imgFirst ? 'order-1' : 'order-1 md:order-2'
                    }`}
                >
                    <Image
                        src={img}
                        alt=''
                        height={600}
                        width={800}
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
