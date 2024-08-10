'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({ navPaths }) => {
    const pathname = usePathname();

    return (
        <ul className='flex items-center justify-end w-full'>
            {navPaths.map((path) => (
                <li key={path.id} className='mr-4'>
                    <Link
                        href={path.url}
                        className={`font-medium hover:text-accent transition-colors ${
                            pathname === path.url ? 'text-accent' : ''
                        }`}
                    >
                        {path.text}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
