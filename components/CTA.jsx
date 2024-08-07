import Link from 'next/link';
import React from 'react';

const CTA = () => {
    return (
        <section
            className='relative py-16 lg:py-24 bg-lightBg text-secondary dark:text-primary before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[""] before:dark:bg-darkBg-alt before:bg-lightBg-alt before:z-[-1]'
            style={{ background: 'url("/cta-bg.png")', backgroundSize: 'cover' }}
        >
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-0 text-start '>
                <div className='md:max-w-[70%]'>
                    <h2 className='text-[22px] leading-7 font-medium lg:text-2xl md:font-semibold pb-4 md:pb-2 '>
                        Unlock Your Business Potential with a Free Website Design Consultation!
                    </h2>
                    <p>
                        Discover how Webexis can transform your online presence, attract more
                        clients, and accelerate your business growth. Book your free consultation
                        today and take the first step towards a thriving service business.
                    </p>
                </div>

                <Link href={'/contact'} className='btn bg-darkBg text-primary mt-6 md:mt-0'>
                    Contact Us Now
                </Link>
            </div>
        </section>
    );
};

export default CTA;
