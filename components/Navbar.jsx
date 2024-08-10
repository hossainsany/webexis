'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { NavLinks, BurgerMenu, DarkModeToggle, NavLinksMobile } from '.';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navPaths = [
        { url: '/', text: 'Home', id: 1 },
        // { url: '/about', text: 'About', id: 2 },
        { url: '/services', text: 'Services', id: 3 },
        { url: '/case-studies', text: 'Portfolio', id: 4 },
        { url: '/contact', text: 'Contact', id: 5 },
    ];

    return (
        <motion.nav
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.4 }}
            className=' sticky flex text-darkText min-h-16 px-4 top-[-1px] left-0 w-full bg-[#f6f6f6]/60 dark:bg-tertiary/60 text-secondary dark:text-primary shadow-md z-50 backdrop-blur-[50px]'
        >
            <div className='container flex justify-between items-center mx-auto'>
                <div className='log rounded-full dark:border-2 dark:border-white min-w-[45px] flex justify-center'>
                    <Link href={'/'} onClick={() => setClicked(false)}>
                        <Image src={'/logo.png'} alt='webexis logo' width={42} height={42} />
                    </Link>
                </div>
                {isMobile ? (
                    <NavLinksMobile clicked={clicked} onSetClick={setClicked} navPaths={navPaths} />
                ) : (
                    <NavLinks clicked={clicked} onSetClick={setClicked} navPaths={navPaths} />
                )}
                <div className='flex items-center'>
                    <DarkModeToggle />
                    {isMobile && <BurgerMenu clicked={clicked} onSetClicked={setClicked} />}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
