'use client';

import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'sonner';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from '@/assets/svg';

const footerLinks = [
    {
        title: 'Company',
        id: 1,
        content: [
            { text: 'About WebExis', link: '/about' },
            { text: 'Our Services', link: '/services' },
            { text: 'Portfolio', link: '/case-studies' },
            { text: 'Our Team', link: '/member' },
            { text: 'Contact Us', link: '/contact' },
        ],
    },
    {
        title: 'Socials',
        id: 2,
        content: [
            { text: 'Linkedin', link: 'https://www.linkedin.com/company/webexis' },
            { text: 'Instagram', link: 'https://instagram.com/webexis_/' },
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
            { text: 'Privacy Policy', link: '/privacy-policy' },
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
        Icon: Instagram,
        alt: 'instagram logo icon',
        link: 'https://www.instagram.com/webexis_/',
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
];

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const res = await axios.post('/api/email', { email });
            if (!res.data.OK) {
                throw new Error(`Something went wrong, status: ${res.status}`);
            }
            toast.success('Email submitted successfully!');
        } catch (err) {
            setError(err.message);
            toast.error(err.status === 409 ? "Looks like you're already subscribed." : err.message);
        } finally {
            setEmail('');
            setIsLoading(false);
        }
    };

    return (
        <footer className='bg-lightBg-alt dark:bg-darkBg-alt text-secondary dark:text-primary'>
            <div className='container mx-auto px-4 xl:px-0'>
                {/* toast */}
                <div>
                    <Toaster position='bottom-right' expand={false} richColors />
                </div>

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
                                className='group h-[45px] w-[45px] bg-dark-white/[0.8] opacity-[85%] flex justify-center items-center rounded-full mr-3 md:mr-0 md:ml-3 bg-lightBg dark:bg-darkBg hover:bg-accent transition-colors ease-in-out duration-300 '
                                key={link}
                            >
                                <Icon
                                    aria-label={alt}
                                    className='fill-secondary dark:fill-primary h-[30px] w-[30px] group-hover:fill-primary transition-colors ease-in-out duration-100 '
                                />
                            </a>
                        ))}
                    </div>
                </div>

                {/* newsletter form  */}
                <div className='py-5 md:py-20 flex justify-between flex-col md:flex-row'>
                    <div className='md:w-[50%] lg:w-[33%] mb-10 md:mb-0'>
                        <h3 className='text-lg xl:text-xl pb-2 font-medium lg:font-semibold'>
                            Subscribe for Exclusive Discounts!
                        </h3>

                        <form
                            onSubmit={handleSubmit}
                            className='flex justify-center items-center w-full md:flex-wrap md:block xl:flex xl:justify-start relative'
                        >
                            <input
                                type='email'
                                placeholder='Your Email'
                                required={true}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className=' py-[10px] max-h-[100px] w-[70%] px-4 md:w-[215px] lg:w-[210px] xl:w-[255px] bg-lightBg text-secondary  rounded-bl-md rounded-tl-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-black dark:focus-visible:outline-white focus-visible:box-border dark:border-2 dark:border-accent dark:border-r-[0px]'
                            />
                            <motion.button
                                className={`w-[30%] md:w-auto lg:w-[115px] xl:w-auto py-[10px] px-0 md:px-[24px] lg:px-[10px] xl:px-[24px] dark:border-2 dark:border-accent rounded-md rounded-tl-none rounded-bl-none dark:border-l-[0px] relative radial-gradient overflow-hidden ${
                                    isLoading ? 'cursor-not-allowed' : 'cursor-pointer'
                                }`}
                                disabled={isLoading}
                                initial={{ '--x': '-100%' }}
                                whileHover={{ '--x': '100%' }}
                                transition={{
                                    duration: 0.3,
                                    type: 'spring',
                                    stiffness: '20',
                                    damping: 10,
                                    mass: 2,
                                }}
                            >
                                <span className='tracking-wide text-primary h-full w-full relative linear-gradient z-10 min-w-[83px] flex justify-center items-center'>
                                    {isLoading ? (
                                        <div className='h-[24px] w-[24px] animate-spin'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 512 512'
                                                className='fill-accent'
                                            >
                                                <path d='M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z' />
                                            </svg>
                                        </div>
                                    ) : (
                                        <p>Subscribe</p>
                                    )}
                                </span>
                                <span className='block absolute inset-0 p-px linear-overlay' />
                            </motion.button>
                        </form>
                        <p className=' text-[11px] opacity-80'>
                            *By subscribing, you agree to our{' '}
                            <Link href='/tos#user-data' className='text-accent hover:underline'>
                                terms of service
                            </Link>
                            .
                        </p>
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
                                                rel='noopener noreferrer'
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
                <div className=' flex justify-center items-center w-full'>
                    <a
                        className='inline-block text-center items-center text-sm font-light opacity-[85%] hover:underline'
                        href='https://donate.unrwa.org/-landing-page/en_EN'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Donate to support families affected by the crisis in Palestine.
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                            className='inline-block h-[14px] w-[14px] ml-2 fill-accent flex-shrink-0'
                        >
                            <path d='M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z' />
                        </svg>
                    </a>
                </div>

                <p className='text-center text-sm font-light opacity-[85%] pb-4'>
                    All rights reserved <span className='text-accent'>© 2024 WebExis LLC.</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
