'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { NavLinks, BurgerMenu } from '.';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <nav className='flex text-darkText min-h-16 px-4 sticky top-[-1px] left-0 w-full z-10 bg-[#f6f6f6] drop-shadow-lg'>
            <div className='container flex justify-between items-center mx-auto'>
                <div className='logo'>
                    <Link href={'/'}>
                        <Image src={'/logo.png'} alt='webexis logo' width={42} height={42} />
                    </Link>
                </div>
                <BurgerMenu clicked={clicked} onSetClicked={setClicked} />
                <NavLinks clicked={clicked} onSetClick={setClicked} />
            </div>
        </nav>
    );
};

export default Navbar;
