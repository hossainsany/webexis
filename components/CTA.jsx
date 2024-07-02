import Link from 'next/link';
import React from 'react';

const CTA = () => {
    return (
        <section
            className='py-12 md:py-16 lg:py-24 bg-lightBg'
            style={{ background: 'url("/cta-bg.png")', backgroundSize: 'cover' }}
        >
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0 text-center md:text-start'>
                <h2 className='text-[22px] leading-7 font-medium lg:text-2xl md:font-semibold md:max-w-[70%]'>
                    Get a free website design consultation and see how Webexis can help you attract
                    more clients and grow your service business.
                </h2>
                <Link href={'/contact'} className='btn bg-darkBg text-primary mt-6 md:mt-0'>
                    Contact Us Now
                </Link>
            </div>
        </section>
    );
};

export default CTA;
