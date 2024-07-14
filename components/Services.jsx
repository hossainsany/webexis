'use client';

import { serviceCards } from '@/constants/data';
import Cards from './Cards';
import { useEffect, useState } from 'react';

const Services = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobile) {
            setCards(serviceCards.slice(0, 3));
        } else {
            setCards(serviceCards);
        }
    }, [isMobile]);

    return (
        <section className='bg-lightBg dark:bg-darkBg dark:text-primary py-24' id='services'>
            <div className='container mx-auto px-4 md:px-0'>
                <div className='section-title text-center pb-24'>
                    <h2 className='text-2xl font-semibold '>
                        Web Design Built for Businesses Like Yours
                    </h2>
                    <p className='text-base'>Specialized Web Design for Service Businesses </p>
                </div>
                <div className=''>
                    {/* <p className='text-base md:text-lg font-medium'>
                        We specialize in web design that empowers service businesses like yours.
                    </p>
                    <p className='text-base md:text-lg font-medium pb-6'>Our services include:</p> */}
                    <div className='services flex flex-col md:flex-row justify-between flex-wrap '>
                        {cards.map((card) => (
                            <Cards
                                title={card.title}
                                desc={card.desc}
                                img={card.img}
                                imgAlt={card.imgAlt}
                                key={card.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
