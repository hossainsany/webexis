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
        link: 'https://www.linkedin.com/company/95719962',
    },
    {
        src: '/assets/facebook.svg',
        alt: 'facebook icon',
        link: 'https://www.facebook.com/profile.php?id=100094162188756',
    },
    { src: '/assets/twitter.svg', alt: 'twitter icon', link: 'https://twitter.com/WebExis_' },
];

const Footer = () => {
    return (
        <footer className='bg-dark-gray py-20 flex flex-col px-20 text-white'>
            <div className='flex justify-between items-center py-10 border-b-[1px] border-accent'>
                <h2 className='text-3xl font-bold'>
                    Stay connected with us and follow our journey on social media!
                </h2>
                <div className='flex '>
                    {icons.map((icon) => (
                        <a
                            href={icon.link}
                            className='h-[50px] w-[50px] bg-dark-white opacity-[85%] flex justify-center items-center rounded-full ml-3 hover:bg-accent hover:opacity-100 hover:transition-colors'
                            key={icon.src}
                        >
                            <Image src={icon.src} alt={icon.alt} height={40} width={40} />
                        </a>
                    ))}
                </div>
            </div>
            <div className='py-20 flex justify-between'>
                <div className=''>
                    <h3 className='text-2xl pb-3 font-semibold'>Email:</h3>
                    <form>
                        <input
                            type='text'
                            placeholder='Your Email'
                            className='py-[10px] px-4 w-[300px]'
                        />
                        <button type='submit' className='btn'>
                            Submit
                        </button>
                    </form>
                </div>
                <div className='flex'>
                    <div className='ml-28'>
                        <h3 className='text-2xl pb-3 font-semibold'>Links</h3>
                        <ul>
                            <li className='flex flex-col'>
                                <Link href='/' className='hover:text-accent transition mb-1.5'>
                                    Terms of Service
                                </Link>
                                <Link href='/' className='hover:text-accent transition mb-1.5'>
                                    Terms of Service
                                </Link>
                                <Link href='/' className='hover:text-accent transition mb-1.5'>
                                    Terms of Service
                                </Link>
                                <Link href='/' className='hover:text-accent transition mb-1.5'>
                                    Terms of Service
                                </Link>
                                <Link href='/' className='hover:text-accent transition '>
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='ml-28'>
                        <h3 className='text-2xl pb-3 font-semibold'>Links</h3>
                        <ul>
                            <li className='flex flex-col'>
                                <Link href='/' className='hover:text-accent transition mb-1.5'>
                                    Terms of Service
                                </Link>
                                <Link href='/' className='hover:text-accent transition mb-1.5'>
                                    Terms of Service
                                </Link>
                                <Link href='/' className='hover:text-accent transition mb-1.5'>
                                    Terms of Service
                                </Link>
                                <Link href='/' className='hover:text-accent transition mb-1.5'>
                                    Terms of Service
                                </Link>
                                <Link href='/' className='hover:text-accent transition '>
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='ml-28'>
                        <h3 className='text-2xl pb-3 font-semibold'>Links</h3>
                        <ul>
                            <li className='flex flex-col'>
                                <Link href='/' className='hover:text-accent transition mb-1.5'>
                                    Terms of Service
                                </Link>
                                <Link href='/' className='hover:text-accent transition mb-1.5'>
                                    Terms of Service
                                </Link>
                                <Link href='/' className='hover:text-accent transition mb-1.5'>
                                    Terms of Service
                                </Link>
                                <Link href='/' className='hover:text-accent transition mb-1.5'>
                                    Terms of Service
                                </Link>
                                <Link href='/' className='hover:text-accent transition '>
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='text-center text-[16px] opacity-[50%]'>
                {' '}
                All rights reserved © 2023 WebExis.
            </p>
        </footer>
    );
};

export default Footer;
