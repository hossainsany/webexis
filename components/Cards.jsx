'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Cards = ({ title, desc, img, imgAlt, index }) => {
    const isLong = index === 0 || index === 5;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: index * 0.12 }}
            className='bg-lightBg-alt dark:bg-tertiary rounded-md p-4 flex flex-col first:flex-col  md:first:flex-row  last:flex-col first:col-span-1 md:first:col-span-2 last:col-span-1 md:last:col-span-2 md:last:flex-row'
        >
            <div
                className={`img xl:h-[200] xl:w-[280px] 2xl:h-[240px] 2xl:w-[300px] flex-1/3 mx-auto ${
                    isLong ? 'xl:w-[445px] xl:h-[275px] mr-4 my-auto' : ''
                }`}
            >
                <Image
                    src={img}
                    alt={imgAlt}
                    height={400}
                    width={400}
                    className='w-full h-full object-cover'
                />
            </div>
            <div
                className={` ${
                    isLong ? 'w-full md:w-[50%] flex flex-col justify-center ml-4' : ''
                }`}
            >
                <h3 className={`text-lg font-semibold pt-4 pb-2 ${isLong ? ' mb-2' : ''}`}>
                    {title}
                </h3>
                <p className='text-base leading-[22px]'>{desc}</p>
            </div>
        </motion.div>
    );
};

export default Cards;
