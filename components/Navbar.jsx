'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { NavLinks, BurgerMenu } from '.';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <nav className='flex text-darkText min-h-16 px-4 sticky top-[-1px] left-0 w-full z-10 bg-[#f6f6f6] dark:bg-tertiary text-secondary dark:text-primary shadow-md'>
            <div className='container flex justify-between items-center mx-auto'>
                <div className='log rounded-full dark:border-2 dark:border-white min-w-[45px] flex justify-center'>
                    <Link href={'/'}>
                        <Image src={'/logo.png'} alt='webexis logo' width={42} height={42} />
                    </Link>
                </div>
                <NavLinks clicked={clicked} onSetClick={setClicked} />
                <div className='flex '>
                    <DarkModeToggle />
                    <BurgerMenu clicked={clicked} onSetClicked={setClicked} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
