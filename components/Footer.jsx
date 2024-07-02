'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Facebook, Instagram, Linkedin, Twitter } from '@/assets/svg';

const footerLinks = [
    {
        title: 'Company',
        id: 1,
        content: [
            { text: 'About WebExis', link: '/about' },
            { text: 'Our Services', link: '/services' },
            { text: 'Projects', link: '/projects' },
            { text: 'Contact Us', link: '/contact' },
        ],
    },
    {
        title: 'Socials',
        id: 2,
        content: [
            { text: 'LinkedIn', link: 'https://www.linkedin.com/company/webexis' },
            { text: 'Insagram', link: 'https://instagram.com/webexis_/' },
            { text: 'Twitter', link: 'https://twitter.com/webexis_' },
            { text: 'Facebook', link: 'https://www.facebook.com/webexis.net' },
        ],
    },
    {
        title: 'Legal',
        id: 3,
        content: [
            { text: 'Terms of Service', link: '/tos' },
            { text: 'Cookie Policy', link: '/cookie-policy' },
            { text: 'Refund Policy', link: '/refund-policy' },
            { text: 'Attributions', link: '/attributions' },
        ],
    },
];

const icons = [
    {
        Icon: Linkedin,
        alt: 'linkedin logo icon',
        link: 'https://www.linkedin.com/company/webexis',
    },
    {
        Icon: Facebook,
        alt: 'facebook logo icon',
        link: 'https://www.facebook.com/webexis.net/',
    },
    {
        Icon: Twitter,
        alt: 'twitter logo icon',
        link: 'https://twitter.com/WebExis_',
    },
    {
        Icon: Instagram,
        alt: 'instagram logo icon',
        link: 'https://www.instagram.com/webexis_/',
    },
];

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <footer className='bg-lightBg-alt py-5 flex flex-col px-5 md:py-5 md:px-0 lg:px-4 xl:px-0 text-secondary'>
            <div className='container mx-auto'>
                {/* socials cta  */}
                <div className='flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center py-10 border-b-[1px] border-accent/[0.3]'>
                    <h2 className='text-2xl md:font-medium pb-5 md:pb-0'>
                        Stay connected and follow our journey on social media!
                    </h2>
                    <div className='flex '>
                        {icons.map(({ Icon, alt, link }) => (
                            <a
                                href={link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='group h-[45px] w-[45px] bg-dark-white/[0.8] opacity-[85%] flex justify-center items-center rounded-full mr-3 md:mr-0 md:ml-3 bg-lightBg hover:bg-accent transition-colors ease-in-out duration-300 '
                                key={link}
                            >
                                <Icon
                                    aria-label={alt}
                                    className='fill-secondary h-[30px] w-[30px] group-hover:fill-primary transition-colors ease-in-out duration-100 '
                                />
                            </a>
                        ))}
                    </div>
                </div>

                {/* newsletter form  */}
                <div className='py-5 md:py-20 flex justify-between flex-col md:flex-row'>
                    <div className='md:w-[50%] lg:w-[33%] mb-10 md:mb-0'>
                        <h3 className='text-lg xl:text-xl pb-3 font-medium'>
                            Stay up to date with our newsletters:
                        </h3>
                        <form
                            onSubmit={handleSubmit}
                            className='flex justify-center items-center w-full md:flex-wrap md:block'
                        >
                            <input
                                type='text'
                                placeholder='Your Email'
                                className='py-[10px] max-h-[100px] w-full px-4 md:w-[215px] lg:w-[210px] xl:w-[255px] text-black bg-lightBg border-secondary rounded-bl rounded-tl focus-visible:outline focus-visible:outline-2 focus-visible:box-border '
                            />
                            <button
                                type='submit'
                                className='btn bg-darkBg text-primary border-2  rounded-tl-none rounded-bl-none'
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* footer liks  */}
                    <div className='flex flex-col md:flex-row md:w-[50%]'>
                        {footerLinks.map((link) => (
                            <div
                                className='ml-0 mb-8 md:ml-[10px] lg:ml-12 xl:ml-20 2xl:ml-28 md:mb-0 flex-1'
                                key={link.id}
                            >
                                <h3 className='text-xl pb-4 font-bold'>{link.title}</h3>
                                <ul className='flex flex-col'>
                                    {link.content.map((item) => (
                                        <li key={item.link}>
                                            <Link
                                                href={item.link}
                                                className='hover:text-accent text-sm transition mb-1.5'
                                            >
                                                {item.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* copyright text  */}
                <p className='text-center text-sm font-light opacity-[85%]'>
                    All rights reserved <span className='text-accent'>© 2024 WebExis.</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
