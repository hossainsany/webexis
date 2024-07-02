'use client';

import { reviews } from '@/constants/data';
import { Review } from '@/components';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);

    const cardRef = useRef(null);

    useEffect(() => {
        setCardWidth(cardRef.current.clientWidth + 24);
    }, []);

    const handlePrev = (e) => {
        e.preventDefault();
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : reviews.length - 1));
    };

    const handleNext = (e) => {
        e.preventDefault();
        setIndex((prevIndex) => (prevIndex < reviews.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <section className='py-24 bg-lightBg-alt overflow-hidden'>
            <div className='container mx-auto px-2 md:px-0'>
                <div className='pb-24'>
                    <h2 className='text-2xl font-semibold text-center'>
                        What Our Clients Say About Webexis
                    </h2>
                    <p className='text-center'>
                        Testimonials Highlighting the Excellence of Webexis
                    </p>
                </div>
                <div className=' overflox-auto relative'>
                    <div className='absolute bottom-[-50px] left-[50%] translate-x-[-50%] flex justify-center items-center'>
                        <button
                            className='px-1 h-[30px] w-[30px] bg-accent/[0.2] z-10 flex items-center justify-center text-primary rounded-full mr-2 opacity-80 hover:opacity-100 transition-all '
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
                            className='px-1 h-[30px] w-[30px] bg-accent/[0.2] z-10 flex items-center justify-center text-primary rounded-full mr-2 opacity-80 hover:opacity-100 transition-all '
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
                        className={`flex  ] transition-all duration-300`}
                        style={{ transform: `translateX(-${index * cardWidth}px` }}
                    >
                        {reviews.map((review) => (
                            <Review
                                key={review.id}
                                title={review.title}
                                desc={review.desc}
                                img={review.img}
                                author={review.author}
                                position={review.position}
                                url={review.url}
                                date={review.date}
                                stars={review.stars}
                                cardRef={cardRef}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
