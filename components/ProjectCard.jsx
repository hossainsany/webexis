'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '.';

const ProjectCard = ({ caseStudy, i }) => {
    return (
        <motion.div
            initial={{ y: 70, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: i * 0.03 }}
            className={`group w-full lg:w-full xl:w-full p-4 md:p-6 lg:p-10 mb-10 rounded bg-lightBg dark:bg-darkBg flex flex-col lg:flex-row hover:shadow-lg lg:overflow-x-hidden transition-shadow`}
        >
            <div className='lg:basis-[25%] xl:basis-1/4  order-2 lg:order-1 mb-6 md:mb-0 flex flex-col md:max-h-[120px] lg:max-h-[300px]'>
                <h3 className='text-2xl md:text-[30px] lg:text-[30px] lg:leading-10 font-bold capitalize mb-4 md:mb-5 mt-0'>
                    {caseStudy.name}
                </h3>
                <div className='flex flex-wrap gap-x-2 gap-y-1'>
                    {caseStudy.tags.map((tag) => (
                        <div
                            key={tag.id}
                            className='text-sm  border-[2px] border-accent/[50%] py-[2px] px-1 md:py-1 md:px-2 text-secondary dark:text-primary rounded'
                        >
                            <p className='opacity-80'>{tag.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className=' order-3 lg:order-2 lg:basis-[60%] xl:basis-3/5 lg:px-6 md:mt-6 lg:mt-14 flex flex-col justify-between lg:items-end'>
                <div className=''>
                    {caseStudy.shortDesc.map((desc) => (
                        <p key={desc.id} className='mb-4 md:mb-8 text-base'>
                            {desc.desc}
                        </p>
                    ))}
                </div>

                <div className='flex gap-x-1 '>
                    <Button link={`/case-studies/${caseStudy.slug}`}>View Case Study</Button>
                </div>
            </div>
            <div className='lg:basis-[30%] xl:basis-1/4 order-1 mb-6 lg:mb-0 lg:order-3 min-w-[200px]  '>
                <div className='w-full lg:w-[260px] xl:w-[280px] h-full rounded overflow-hidden'>
                    <Image
                        src={caseStudy.img}
                        alt='project img'
                        width={400}
                        height={400}
                        className='block h-full w-full object-cover group-hover:scale-[105%] transition-all duration-300 ease-out'
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
