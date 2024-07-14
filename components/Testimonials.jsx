'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { reviews } from '@/constants/data';
import { Review } from '@/components';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const totalItems = reviews.length;
    const visibleItems = [...reviews.slice(-1), ...reviews, ...reviews.slice(0, 2)];

    const handleNext = () => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrev = () => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    useEffect(() => {
        if (currentIndex === 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(totalItems);
            }, 400);
        } else if (currentIndex === totalItems + 1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1);
            }, 400);
        } else {
            setIsTransitioning(true);
        }
    }, [currentIndex, totalItems]);

    return (
        <section className='py-24 bg-lightBg dark:bg-darkBg text-secondary dark:text-primary overflow-hidden'>
            <div className='container mx-auto px-2 md:px-0'>
                <div className='pb-24'>
                    <h2 className='text-2xl font-semibold text-center'>
                        What Our Clients Say About Webexis
                    </h2>
                    <p className='text-center'>Client Experiences with Webexis</p>
                </div>
            </div>
            <div className='overflox-auto relative w-[350px] md:w-[600px] mx-auto'>
                <div className='absolute bottom-[-50px] left-[50%] translate-x-[-50%] flex justify-center items-center'>
                    <button
                        className='px-1 h-[30px] w-[30px] bg-accent/[0.3] z-10 flex items-center justify-center text-primary rounded-full mr-2 opacity-80 hover:opacity-100 transition-all '
                        onClick={handlePrev}
                    >
                        <Image
                            src='/left-arrow.png'
                            alt='arrow icon pointing to left'
                            height={10}
                            width={10}
                        />
                    </button>
                    <button
                        className='px-1 h-[30px] w-[30px] bg-accent/[0.3] z-10 flex items-center justify-center text-primary rounded-full mr-2 opacity-80 hover:opacity-100 transition-all '
                        onClick={handleNext}
                    >
                        <Image
                            src='/right-arrow.png'
                            alt='arrow icon pointing to left'
                            height={10}
                            width={10}
                        />
                    </button>
                </div>

                <div
                    className={`grid grid-flow-col gap-[20px]`}
                    style={{
                        transform: `translateX(calc(-${currentIndex * 100}% - ${
                            currentIndex === 0 ? '0px' : `${currentIndex * 20}px`
                        }))`,
                        transition: isTransitioning ? 'transform 400ms ease-in-out' : 'none',
                    }}
                >
                    {visibleItems.map((review, i) => (
                        <Review
                            key={`${review.id}-${i}`}
                            title={review.title}
                            desc={review.desc}
                            img={review.img}
                            author={review.author}
                            position={review.position}
                            url={review.url}
                            date={review.date}
                            stars={review.stars}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
