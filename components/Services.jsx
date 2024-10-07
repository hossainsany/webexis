'use client';

import { useEffect, useState } from 'react';
import { serviceCards } from '@/data';
import { Cards } from '.';

const Services = () => {
    const [cards, setCards] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

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

    useEffect(() => {
        if (isMobile) {
            setCards(serviceCards.slice(0, 3));
        } else {
            setCards(serviceCards);
        }
    }, [isMobile]);

    return (
        <section
            className='bg-lightBg dark:bg-darkBg text-secondary dark:text-primary py-24'
            id='services'
        >
            <div className='container mx-auto px-4 2xl:px-0'>
                <div className='section-title text-center pb-24'>
                    <h2 className='text-2xl font-semibold '>Comprehensive Web Solutions</h2>
                    <p className='text-base'> Tailored Services for your Success</p>
                </div>
                <div className=''>
                    <div className='services grid grid-cols-1 md:grid-cols-4 grid-rows-1 gap-4'>
                        {cards.map((card, i) => (
                            <Cards
                                title={card.title}
                                desc={card.desc}
                                img={card.img}
                                imgAlt={card.imgAlt}
                                key={card.id}
                                index={i}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
