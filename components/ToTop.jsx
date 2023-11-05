'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-[20px] right-[20px] opacity-90 md:opacity-100 md:bottom-[30px] md:right-[30px] lg:bottom-[10%] lg:right-[50px] rounded-full bg-accent h-[45px] w-[45px] md:h-[50px] md:w-[50px] flex items-center justify-center hover:bg-accent/[.7] transition ${
                isVisible ? 'visible' : 'invisible'
            }`}
        >
            <Image src='/assets/angle-up.svg' height={30} width={30}></Image>
        </button>
    );
};

export default ToTop;
