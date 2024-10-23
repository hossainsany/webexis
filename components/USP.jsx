'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const USP = () => {
    const items = [
        {
            id: 2,
            title: 'Showcase your expertise:',
            body: 'We create affordable websites that highlights your unique selling points and builds trust with potential clients.',
        },
        {
            id: 1,
            title: 'Increased client reach:',
            body: 'Our affordable website design packages use on-page SEO and high-quality content to help you reach more clients and grow your business.',
        },
        {
            id: 4,
            title: 'Mobile-first approach:',
            body: 'With most clients browsing on mobile, we create websites that look stunning on both mobile and desktop devices.',
        },

        {
            id: 3,
            title: 'Simplified lead capture:',
            body: 'We create user-friendly websites with clear calls to action and intuitive design to make it easy for visitors to contact you.',
        },

        {
            id: 5,
            title: 'Ongoing support:',
            body: 'We offer ongoing maintenance and support to keep your website performing well. Our website design packages prices offer transparency and great value.',
        },
    ];

    return (
        <section
            className='py-24 bg-lightBg-alt dark:bg-darkBg-alt text-secondary dark:text-primary'
            id='usp'
        >
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-4 xl:px-0'>
                <div className='text md:w-[52%] lg:w-[46%] order-2 md:order-1'>
                    <ul>
                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className='text-2xl font-semibold pb-4'
                        >
                            Why Choose <span className='text-accent '>Webexis</span> for Your
                            Service Business Website Design?
                        </motion.h2>
                        {items.map((item, i) => (
                            <motion.li
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: 'easeInOut', delay: i * 0.1 }}
                                key={item.id}
                                className='text-lg pb-4'
                            >
                                <div className='flex items-start shrink-0'>
                                    <span className='shrink-0 mt-[8px] block h-[10px] w-[10px] bg-accent rounded-full mr-3'></span>
                                    <h3 className='inline-block'>
                                        <span className='text-lg font-semibold mr-2'>
                                            {item.title}
                                        </span>
                                        {item.body}
                                    </h3>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div className='img w-full md:w-[48%] lg:w-[26%] pb-10 md:pb-0 mt-[-96px] md:my-[-96px] order-1 md:order-2'>
                    <Image
                        src={'/usp.png'}
                        alt='picture of people working together to create website at webexis'
                        height={1920}
                        width={1080}
                    />
                </div>
            </div>
        </section>
    );
};

export default USP;
