'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { reviews } from '@/data';
import { Review } from '@/components';
import { AngleLeft, AngleRight } from '@/assets/svg';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [nextHandleTriggered, setNextHandleTriggered] = useState(false);
    const [prevHandleTriggered, setPrevHandleTriggered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const currentReview = [...reviews.slice(-3), ...reviews, ...reviews.slice(0, 5)];

    const mobileWidth = -400 * currentIndex;
    const deskWidth = -620 * currentIndex;

    const handleNext = async () => {
        setPrevHandleTriggered(false);
        setNextHandleTriggered(true);
        if (currentIndex < reviews.length) {
            setIsTransitioning(true);
            setCurrentIndex((i) => i + 1);
        } else {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1);
            }, 300);
        }
    };
    const handlePrev = () => {
        setPrevHandleTriggered(true);
        setNextHandleTriggered(false);

        if (currentIndex <= 0) {
            setTimeout(() => {
                setIsTransitioning(true);
                setCurrentIndex(reviews.length);
            }, 300);
        } else {
            setIsTransitioning(true);
            setCurrentIndex((i) => i - 1);
        }
    };

    useEffect(() => {
        if (nextHandleTriggered && currentIndex === 5) {
            setIsTransitioning(true);
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 300);
        }

        if (prevHandleTriggered && currentIndex === 0) {
            setIsTransitioning(true);
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(5);
            }, 300);
        }
    }, [currentIndex, nextHandleTriggered, prevHandleTriggered]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
            <div className='w-[360px] overflox-auto relative  md:w-full mx-auto'>
                <div className='absolute bottom-[-50px] left-[50%] translate-x-[-50%] translate-y-[50%] flex justify-center items-center'>
                    <button
                        onClick={handlePrev}
                        className='px-1 h-[32px] w-[32px] bg-accent/[0.3] z-10 flex items-center justify-center text-primary rounded-full mr-2 opacity-80 hover:opacity-100 transition-all '
                    >
                        <AngleLeft className='h-[25px] w-[25px] fill-secondary dark:fill-primary' />
                    </button>
                    <button
                        onClick={handleNext}
                        className='px-1 h-[32px] w-[32px] bg-accent/[0.3] z-10 flex items-center justify-center text-primary rounded-full mr-2 opacity-80 hover:opacity-100 transition-all '
                    >
                        <AngleRight className='h-[25px] w-[25px] fill-secondary dark:fill-primary' />
                    </button>
                </div>

                <motion.div
                    className={` flex justify-center md:grid md:grid-flow-col md:gap-5`}
                    initial={{ translateX: 0 }}
                    animate={{
                        translateX: isMobile ? mobileWidth : deskWidth,
                    }}
                    transition={{ duration: isTransitioning ? 0.3 : 0, ease: 'easeInOut' }}
                >
                    {currentReview.map((review, i) => (
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
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
