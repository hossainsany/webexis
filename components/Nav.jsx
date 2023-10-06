'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import NavLinks from './NavLinks';

const Nav = () => {
    const [burgerToggle, setBurgerToggle] = useState(false);

    return (
        <nav
            className={`w-full flex justify-between items-center px-5 lg:px-20 py-2 bg-dark-gray relative border-b-[1px] border-accent/[0.3] `}
        >
            <Link href='/' className='logo inline-block text-white'>
                <Image src='/assets/webexis-logo.png' alt='webexis logo' height={60} width={60} />
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
        </nav>
    );
};

export default Nav;
