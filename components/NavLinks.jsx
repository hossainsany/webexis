'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navPaths = [
    { url: '/', text: 'Home', id: 1 },
    { url: '/about', text: 'About', id: 2 },
    { url: '/services', text: 'Services', id: 3 },
    { url: '/contact', text: 'Contact', id: 4 },
];

const NavLinks = ({ clicked, onSetClick }) => {
    const pathname = usePathname();
    const handleClick = () => {
        onSetClick((c) => !c);
    };

    return (
        <ul
            className={`absolute flex top-[64px] left-0 py-4 md:py-0 flex-col text-center md:text-left w-full bg-[#f6f6f6] dark:bg-[#292F39] border-t-2 border-accent/70 md:border-none mx-auto md:static md:flex-row md:justify-end md:items-end ${
                clicked ? 'flex' : 'hidden'
            } md:flex z-10`}
        >
            {navPaths.map((link) => (
                <li key={link.id}>
                    <Link
                        href={link.url}
                        onClick={handleClick}
                        className={`inline-block font-medium ml-0 md:ml-5 mb-5 mt-4 md:mt-0 md:mb-0 hover:text-accent transition-all ${
                            pathname === `${link.url}` ? 'text-accent ' : ''
                        }`}
                    >
                        {link.text}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
