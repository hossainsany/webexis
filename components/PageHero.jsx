'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const PageHero = ({
    headingImg,
    headingTitle,
    headingSubtitle,
    headingText,
    headingTextShort,
    bgAlt,
    imgHFull,
}) => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentHeadingText, setCurrentHeadingText] = useState(headingText);

    const bgStyle = bgAlt ? 'bg-lightBg-alt dark:bg-darkBg-alt' : 'bg-primary dark:bg-darkBg';

    useEffect(() => {
        const handleMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleMobile);
        handleMobile();

        return () => {
            window.removeEventListener('resize', handleMobile);
        };
    }, []);

    useEffect(() => {
        isMobile ? setCurrentHeadingText(headingTextShort) : setCurrentHeadingText(headingText);
    }, [isMobile, headingText, headingTextShort]);

    return (
        <section
            className={`bg-lightBg dark:bg-darkBg text-secondary dark:text-primary pt-12 pb-12 md:min-h-[442px] md:pt-28 md:pb-24 ${bgStyle}`}
        >
            <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0'>
                <div className='flex-1 flex justify-start md:mb-12 lg:my-[-80px]'>
                    <div
                        className={`${
                            imgHFull ? 'h-[370px] md:h-[400px]' : 'h-[225px] md:h-[385px]'
                        }  w-full lg:w-[550px] mb-4 md:mb-0`}
                    >
                        <Image
                            src={headingImg}
                            alt=''
                            height={400}
                            width={660}
                            className='h-full w-full object-cover'
                            priority={true}
                        />
                    </div>
                </div>
                <div className='flex-1 flex flex-col justify-center lg:min-h-[200px]'>
                    <div className='text-center lg:text-start mb-8'>
                        <h1 className='text-4xl font-bold '>{headingTitle}</h1>
                        <p>{headingSubtitle}</p>
                    </div>
                    <p className='text-center lg:text-start mt-6 lg:mt-0'>{currentHeadingText}</p>
                </div>
            </div>
        </section>
    );
};

export default PageHero;
