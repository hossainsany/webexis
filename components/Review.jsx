'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Quote } from '@/assets/svg';

const Review = ({ title, desc, img, author, position, stars, url, date }) => {
    const generateStars = () => {
        let starArray = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= stars) {
                starArray.push(
                    <Image
                        key={`blue-star-${i}`}
                        src='/star.png'
                        height={25}
                        width={25}
                        alt='icon of a blue star'
                    />
                );
            } else {
                starArray.push(
                    <Image
                        key={`gray-star-${i}`}
                        src='/gray-star.png'
                        height={25}
                        width={25}
                        alt='icon of a gray star'
                    />
                );
            }
        }

        return starArray;
    };

    return (
        <div className='w-[360px] md:w-[600px] bg-lightBg-alt dark:dark:bg-[#292F39] p-4 md:p-6 mr-[20px] ml-[20px] mx-auto md:mx-0 rounded-md flex flex-col justify-between hover:drop-shadow-2xl transition-all hover:transition-all hover:duration-300 overflow-x-auto flex-shrink-0'>
            <div className=''>
                {stars ? (
                    <div className='flex justify-between items-center pb-8'>
                        <div className='stars flex items-center justify-start'>
                            {generateStars()}
                        </div>
                        <div className='text-sm md:text-base date'>{date}</div>
                    </div>
                ) : (
                    <div className=' pb-4'>
                        <Quote className='h-[70px] fill-accent opacity-65' />
                    </div>
                )}
                <div className='pb-6'>
                    <h3 className='text-lg font-medium mb-2'>{title}</h3>
                    <p className='text-sm md:text-base mb-2'> {desc}</p>
                </div>
            </div>

            <div className={`flex  items-center ${!stars ? 'justify-end' : 'justify-between'}`}>
                <div className='flex items-center'>
                    <div className={`img min-w-[50px] ${!stars ? 'order-2' : 'order-1'}`}>
                        <Image
                            src={img}
                            alt={`picture of ${author} a ${position}`}
                            height={40}
                            width={40}
                            className='rounded-full'
                        />
                    </div>

                    <div
                        className={`flex flex-col justify-center min-h-[50px] ${
                            !stars ? 'order-1 mr-2' : 'order-2'
                        }`}
                    >
                        <h4 className='text-base font-medium leading-3 mt-[6px]'>{author}</h4>
                        <p className='text-xs md:text-base'>{position}</p>
                    </div>
                </div>
                {stars && (
                    <div className='flex justify-end items-center min-w-[132px]'>
                        <Link
                            href={url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-xs md:text-base hover:underline'
                            tabIndex={-1}
                        >
                            View on Trustpilot
                        </Link>
                        <div className='ml-1 md:ml-2'>
                            <Image
                                src='/trustpilot.png'
                                alt='trust pilot logo'
                                width={20}
                                height={20}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Review;
