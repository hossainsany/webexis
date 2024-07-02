import Image from 'next/image';
import React from 'react';

const USP = () => {
    const items = [
        {
            id: 1,
            title: 'Increased client reach:',
            body: 'We design websites that attract new clients through search engine optimization and strategic online presence.',
        },
        {
            id: 2,
            title: 'Showcase your expertise:',
            body: 'Our web design highlights your unique selling points and builds trust with potential clients.',
        },
        {
            id: 3,
            title: 'Simplified lead capture:',
            body: 'We craft user-friendly websites that encourage visitors to contact you with ease through clear calls to action and accessible contact forms.',
        },
        {
            id: 4,
            title: 'Mobile-first approach:',
            body: 'We ensure your website functions flawlessly on all devices, maximizing the opportunity for new clients to reach you.',
        },
        {
            id: 5,
            title: 'Ongoing support:',
            body: 'Our team is here to provide ongoing support and maintenance to keep your website performing at its best and attracting new clients.',
        },
    ];

    return (
        <section className='py-24 bg-lightBg'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0'>
                <div className='text md:w-[52%] lg:w-[46%] order-2 md:order-1'>
                    <ul>
                        <h2 className='text-2xl font-semibold pb-4'>
                            Why Choose <span className='text-accent '>Webexis</span> for Your
                            Service Business Website Design?
                        </h2>
                        {items.map((item) => (
                            <li key={item.id} className='text-lg pb-4'>
                                <div className='flex items-start'>
                                    <h4 className='inline-block'>
                                        <span className='inline-block h-[10px] w-[10px] bg-accent rounded-full mr-2'></span>
                                        <span className='text-lg font-semibold mr-2'>
                                            {item.title}
                                        </span>
                                        {item.body}
                                    </h4>
                                </div>
                            </li>
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
