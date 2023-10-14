'use client';

import { useState } from 'react';
import Image from 'next/image';

import { faq } from '@constants';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (i) => {
        setActiveIndex(i === activeIndex ? null : i);
    };

    return (
        <section className='bg-dark-gray '>
            <div className='container mx-auto'>
                <div className='text-center text-dark-white mb-[50px] md:mb-[100px] '>
                    <h2 className='text-4xl font-semibold'>FAQs</h2>
                    <p className='pt-2'>Answers to Common Inquiries</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    {faq.map(({ id, title, body }, i) => (
                        <div
                            className={`w-full bg-light-gray  py-4 px-5 md:px-10 rounded-md relative cursor-pointer overflow-visible ${
                                activeIndex === i ? 'mb-[19rem] md:mb-44 lg:mb-36 ' : 'mb-5'
                            }`}
                            onClick={() => handleClick(i)}
                            key={id}
                        >
                            <div className='flex justify-between items-center z-0'>
                                <h3 className='text-base md:text-lg font-semibold pr-3'>{title}</h3>
                                {activeIndex === i ? (
                                    <Image
                                        src='/assets/minus.svg'
                                        alt='minus icon'
                                        height={25}
                                        width={25}
                                    />
                                ) : (
                                    <Image
                                        src='/assets/plus.svg'
                                        alt='plus icon'
                                        height={25}
                                        width={25}
                                    />
                                )}
                            </div>
                            <div
                                className={`bg-light-gray/[55%] absolute w-full left-0 px-5 md:px-14 pt-6 pb-5 md:pt-7 md:pb-5 rounded-md  transition-300  ${
                                    activeIndex !== i
                                        ? 'w-full top-0 pt-0 pb-0 opacity-0 z-[-1] text-dark-white'
                                        : 'top-[95%] md:top-[55px] opacity-100'
                                }`}
                            >
                                <p>{body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
