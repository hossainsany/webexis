'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { NavLinks } from '@components';

const Nav = () => {
    const [burgerToggle, setBurgerToggle] = useState(false);

    return (
        <nav className='w-full flex justify-between items-center px-5 lg:px-2 xl:px-0 py-2 bg-dark-gray border-b-[1px] border-accent/[0.3] sticky top-0 left-0 z-50'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link
                    href='/'
                    className='logo inline-block text-white h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] relative'
                >
                    <Image
                        src='/assets/webexis-logo.png'
                        alt='webexis logo'
                        className='object-cover'
                        fill
                    />
                </Link>

                <div className='burger-menu  inline-block cursor-pointer lg:hidden'>
                    <button onClick={() => setBurgerToggle((prev) => !prev)}>
                        {!burgerToggle ? (
                            <Image
                                src='/assets/burger-menu.svg'
                                alt='x icon'
                                height={25}
                                width={25}
                                className='fill-white opacity-90'
                            />
                        ) : (
                            <Image
                                src='/assets/x.svg'
                                alt='x icon'
                                height={22}
                                width={22}
                                className='fill-white opacity-90'
                            />
                        )}
                    </button>
                </div>

                <NavLinks burgerToggle={burgerToggle} setBurgerToggle={setBurgerToggle} />
            </div>
        </nav>
    );
};

export default Nav;
