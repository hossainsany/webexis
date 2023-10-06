'use client';

import Image from 'next/image';
import Link from 'next/link';

const icons = [
    {
        src: '/assets/instagram.svg',
        alt: 'instagram icon',
        link: 'https://www.instagram.com/webexis_/',
    },
    {
        src: '/assets/linkedin.svg',
        alt: 'linkedin icon',
        link: 'https://www.linkedin.com/company/webexis',
    },
    {
        src: '/assets/threads.svg',
        alt: 'threads icon',
        link: 'https://www.threads.net/@webexis_',
    },
    { src: '/assets/twitter.svg', alt: 'twitter icon', link: 'https://twitter.com/WebExis_' },
];

const Footer = () => {
    return (
        <footer className='bg-dark-gray py-5 flex flex-col px-5 md:py-5 md:px-[30px] lg:px-20 text-white'>
            <div className='flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center py-10 border-b-[1px] border-accent/[0.3]'>
                <h2 className='text-2xl md:font-medium pb-5 md:pb-0'>
                    Stay connected and follow our journey on social media!
                </h2>
                <div className='flex '>
                    {icons.map((icon) => (
                        <a
                            href={icon.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='h-[45px] w-[45px] bg-dark-white/[0.8] opacity-[85%] flex justify-center items-center rounded-full mr-3 md:mr-0 md:ml-3 hover:bg-accent transition-300'
                            key={icon.src}
                        >
                            <Image
                                src={icon.src}
                                alt={icon.alt}
                                height={30}
                                width={30}
                                className='fill-white'
                            />
                        </a>
                    ))}
                </div>
            </div>
            <div className='py-5 md:py-20 flex justify-between flex-col md:flex-row'>
                <div className='md:w-[50%] lg:w-[33%] mb-10 md:mb-0'>
                    <h3 className='text-lg xl:text-xl pb-3 font-medium'>
                        Stay up to date with our newsletters:
                    </h3>
                    <form className='flex justify-center items-center flex-wrap md:block'>
                        <input
                            type='text'
                            placeholder='Your Email'
                            className='py-[9.5px]  px-4 w-[240px] md:w-[215px] lg:w-[300px] text-black rounded-bl rounded-tl focus-visible:outline focus-visible:outline-2 focus-visible:box-border q360'
                        />
                        <button
                            type='submit'
                            className='btn rounded-br rounded-tr focus-visible:outline focus-visible:outline-2 focus-visible:box-border'
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className='flex flex-col md:flex-row md:w-[50%]'>
                    <div className='ml-0 mb-8 md:ml-[10px] lg:ml-28 md:mb-0 flex-1'>
                        <h3 className='text-xl pb-4 font-bold'>Company</h3>
                        <ul className='flex flex-col'>
                            <li>
                                <Link
                                    href='/'
                                    className='hover:text-accent text-sm transition mb-1.5'
                                >
                                    About WebExis
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/'
                                    className='hover:text-accent text-sm transition mb-1.5'
                                >
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/'
                                    className='hover:text-accent text-sm transition mb-1.5'
                                >
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/'
                                    className='hover:text-accent text-sm transition mb-1.5'
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='ml-0 mb-8 md:ml-[10px] lg:ml-28 md:mb-0 flex-1'>
                        <h3 className='text-xl pb-4 font-bold'>Socials</h3>
                        <ul className='flex flex-col'>
                            <li>
                                <Link
                                    href='https://www.linkedin.com/company/webexis'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:text-accent text-sm transition mb-1.5'
                                >
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='https://instagram.com/webexis_/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:text-accent text-sm transition mb-1.5'
                                >
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='https://twitter.com/webexis_'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:text-accent text-sm transition mb-1.5'
                                >
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='https://threads.net/@webexis_'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:text-accent text-sm transition mb-1.5'
                                >
                                    Threads
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='ml-0 mb-8 md:ml-[10px] lg:ml-28 md:mb-0 flex-1'>
                        <h3 className='text-xl pb-4 font-bold'>Legal</h3>
                        <ul className='flex flex-col'>
                            <li>
                                <Link
                                    href='/tos'
                                    className='hover:text-accent text-sm transition mb-1.5'
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/cookie-policy'
                                    className='hover:text-accent text-sm transition mb-1.5'
                                >
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='text-center text-sm font-light opacity-[55%]'>
                All rights reserved <span className='text-accent'>© 2023 WebExis.</span>
            </p>
        </footer>
    );
};

export default Footer;
