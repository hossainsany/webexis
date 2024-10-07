'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const CaseStudy = ({ currentProject }) => {
    return (
        <section className='py-24 bg-lightBg dark:bg-darkBg text-secondary dark:text-primary'>
            {/* <div className='container mx-auto px-4 xl:px-0'>
                <div className='flex justify-center items-center min-h-screen rounded-md'>
                    <motion.div className='w-[60%] '>
                        <Image
                            src={currentProject.content.img0}
                            alt=''
                            height={1600}
                            width={1600}
                            className='w-full h-full object-cover'
                        />
                    </motion.div>
                </div>
            </div> */}
            <div className='container mx-auto px-4 xl:px-0'>
                <h2 className='text-center text-xl font-semibold'>
                    This page is currently under development! Please check back soon for updates.
                </h2>
            </div>
        </section>
    );
};

export default CaseStudy;
