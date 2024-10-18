'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import RedirectLink from './RedirectLink';

const CaseStudySection = ({
    title1,
    body1,
    title2,
    body2,
    img,
    tags,
    links,
    imgFirst = true,
    obj,
}) => {
    return (
        <section
            className={`py-24 text-secondary dark:text-primary ${
                imgFirst ? 'bg-lightBg dark:bg-darkBg' : 'bg-lightBg-alt dark:bg-darkBg-alt'
            }`}
        >
            <div className='container flex flex-col lg:flex-row justify-between gap-12 mx-auto px-4 xl:px-0'>
                <div
                    className={`flex-1 flex justify-center items-center  ${
                        imgFirst ? 'order-1 justify-start' : 'order-1 lg:order-2 justify-end'
                    }`}
                >
                    <motion.div
                        className={`${
                            obj ? 'md:min-h-[640px] ' : 'min-w-[350px] md:min-w-[750px]'
                        }  w-[570px] rounded-md overflow-hidden`}
                    >
                        <Image
                            src={img}
                            alt=''
                            height={1000}
                            width={1000}
                            className='w-full h-full object-cover'
                        />
                    </motion.div>
                </div>
                <div
                    className={`flex-1 flex flex-col justify-between ${
                        imgFirst ? 'order-1 lg:order-2' : 'order-1'
                    }`}
                >
                    <div className=''>
                        <div
                            className={`flex flex-col  ${
                                obj ? ' lg:min-h-[640px] justify-start' : 'justify-between'
                            }`}
                        >
                            <div className=''>
                                <h2 className='text-xl font-semibold mb-2'>{title1}</h2>
                                <p>{obj ? obj.body : body1}</p>
                            </div>
                            {obj && (
                                <div className='mt-10 flex flex-col gap-6'>
                                    {obj.options.map((item) => (
                                        <div key={item.title} className='relative'>
                                            <div className='absolute top-[6px] left-0 h-[12px] w-[12px] bg-accent rounded-full'></div>
                                            <p className='ml-6'>
                                                <span className='font-semibold '>
                                                    {item.title}:{' '}
                                                </span>
                                                {item.body}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        {title2 && (
                            <>
                                <div className='mt-8 '>
                                    <h2 className=' text-xl font-semibold mb-2'>{title2}</h2>
                                    <p>{body2}</p>
                                </div>
                            </>
                        )}
                    </div>
                    {tags && (
                        <div className='mt-8 lg:mt-0'>
                            <h2 className=' text-xl font-semibold mb-2'>Scope of Work</h2>
                            <ul className=' w-[350px] flex flex-wrap'>
                                {tags.map((tag, i, arr) => (
                                    <li key={tag} className='pr-1 italic'>
                                        {`${tag}${i < arr.length - 1 ? ',' : ''} `}
                                    </li>
                                ))}
                            </ul>
                            <div className='flex  justify-between md:justify-start gap-x-2 mt-8 md:mt-4'>
                                <RedirectLink href={links.liveUrl} newTab={true}>
                                    View Live Demo
                                </RedirectLink>
                                {links.githubUrl && (
                                    <RedirectLink href={links.githubUrl} newTab={true}>
                                        View Source Code
                                    </RedirectLink>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CaseStudySection;
