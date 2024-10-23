import Image from 'next/image';
import { Button } from '.';

const CTA = ({ bgAlt }) => {
    return (
        <section
            className={`relative py-16 lg:py-24 bg-accent text-secondary dark:text-primary z-0 `}
        >
            <Image src='/cta-bg.png' alt='geomatric shapes' fill className='object-cover z-[-1]' />
            <div
                className={`absolute top-0 left-0 w-full h-full content-[''] z-[-5] ${
                    bgAlt ? 'dark:bg-darkBg-alt bg-lightBg-alt' : 'dark:bg-darkBg bg-lightBg'
                }`}
            ></div>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4 xl:px-0 text-start '>
                <div className='md:max-w-[70%] mb-6 md:mb-0'>
                    <h2 className='text-[22px] leading-7 font-medium lg:text-2xl md:font-semibold pb-4 md:pb-2 '>
                        Unlock Your Business Potential with a Free Quote!
                    </h2>
                    <p>
                        Discover how Webexis can enhance your online presence with affordable
                        website design. Attract more clients and accelerate your business growth
                        without breaking the bank. Contact us today for your free quote and take the
                        first step towards an effective, budget-friendly digital solution!
                    </p>
                </div>

                <Button link='/contact'>Get a Free Quote</Button>
            </div>
        </section>
    );
};

export default CTA;
