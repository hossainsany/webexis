'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '.';
import { useState } from 'react';

const ProjectCard = ({ caseStudy, i }) => {
    const [desc, setDesc] = useState(caseStudy.projectOverview.slice(0, 325) + '...');

    const handleReadMore = () => {
        setDesc((prev) => {
            if (prev.length > 350) {
                return caseStudy.projectOverview.slice(0, 325) + '...';
            } else {
                return caseStudy.projectOverview;
            }
        });
    };

    return (
        <motion.div
            initial={{ y: 99.5, opacity: 0, scale: 1.05 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeIn', delay: i * 0.03 }}
            className={`group w-full lg:w-full xl:w-full p-4 md:p-6 lg:p-10 mb-10 rounded-md bg-lightBg dark:bg-darkBg flex flex-col lg:flex-row hover:shadow-sm lg:overflow-x-hidden transition-shadow`}
        >
            <div className='lg:basis-[25%] xl:basis-1/4  order-2 lg:order-1 mb-6 md:mb-0 flex flex-col md:max-h-[120px] lg:max-h-[300px]'>
                <h3 className='text-2xl md:text-[30px] lg:text-[30px] lg:leading-10 font-bold capitalize mb-4 md:mb-5 mt-0'>
                    {caseStudy.name}
                </h3>
                <div className='flex flex-wrap gap-x-2 gap-y-1'>
                    {caseStudy.tags.map((tag) => (
                        <div
                            key={tag}
                            className='text-sm  border-[2px] border-accent/[50%] py-[2px] px-1 md:py-1 md:px-2 text-secondary dark:text-primary rounded'
                        >
                            <p className='opacity-80'>{tag}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className=' order-3 lg:order-2 lg:basis-[60%] xl:basis-3/5 lg:px-6 md:mt-6 lg:mt-14 flex flex-col justify-between lg:items-end'>
                <div className=''>
                    <p>
                        {desc}
                        <button
                            className='text-accent font-medium ml-4 hover:underline'
                            onClick={handleReadMore}
                        >
                            {desc.length > 350 ? 'Show Less' : 'Read More'}
                        </button>
                    </p>
                </div>

                <div className='flex gap-x-1 mt-6 lg:mt-0'>
                    <Button link={`/case-studies/${caseStudy.slug}`}>View Case Study</Button>
                </div>
            </div>
            <div className='lg:basis-[30%] xl:basis-1/4 order-1 mb-6 lg:mb-0 lg:order-3 min-w-[200px]  flex justify-center items-start'>
                <div className='w-full lg:w-[260px] xl:w-[280px] h-full rounded overflow-hidden'>
                    <Image
                        src={caseStudy.content.img2}
                        alt='project image'
                        width={280}
                        height={318}
                        className='flex h-full w-full object-cover group-hover:scale-[103%] transition-all duration-700 ease-out'
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
