'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const CaseStudyContent = ({ img, textFirst, children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='flex flex-col md:flex-row justify-between items-center border-b-2 border-accent/30 py-8'>
            <div className={`flex-1 ${textFirst && !isMobile ? 'order-1' : 'order-2 '}`}>
                {children}
            </div>
            <div className={`flex-1 ${textFirst && !isMobile ? 'order-2' : 'order-1'}`}>
                <div
                    className={`h-[400px] w-[350px] rounded overflow-hidden group mb-6 md:mb-0 ${
                        textFirst ? 'ml-auto' : 'mr-auto'
                    }`}
                >
                    <Image
                        src={img}
                        alt=''
                        height={400}
                        width={400}
                        className='block h-full w-full object-cover group-hover:scale-[105%] transition-all duration-300 ease-out'
                    />
                </div>
            </div>
        </div>
    );
};

export default CaseStudyContent;
