'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, MotionConfig } from 'framer-motion';

const NavLinksMobile = ({ clicked, onSetClick, navPaths }) => {
    const pathname = usePathname();
    const handleClick = () => {
        onSetClick((c) => !c);
    };

    return (
        <MotionConfig
            transition={{
                duration: 1,
                ease: 'easeInOut',
            }}
        >
            <motion.ul
                className={`absolute justify-around top-[64px] h-0 left-0 flex-col text-center w-full bg-[#f6f6f6] dark:bg-[#292F39] border-t-2 border-accent/70  z-10`}
                initial={{ height: 0, display: 'none' }}
                animate={clicked ? 'open' : 'closed'}
                variants={{
                    open: {
                        height: [0, '45vh', '45vh'],
                        display: 'flex',
                    },
                    closed: {
                        height: ['45vh', '45vh', '0'],
                    },
                }}
            >
                {navPaths.map((link, i) => (
                    <motion.li
                        className=''
                        key={link.id}
                        initial={{ opacity: 0, y: -50 }}
                        variants={{
                            open: {
                                y: 0,
                                opacity: [0, 0, 1],
                            },
                            closed: {
                                opacity: [1, 0, 0],
                                y: -50,
                            },
                        }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeInOut' }}
                    >
                        <Link
                            href={link.url}
                            onClick={handleClick}
                            className={`inline-block text-base font-medium ml-0 md:ml-5 mb-5 mt-4 md:mt-0 md:mb-0 hover:text-accent transition-all ${
                                pathname === `${link.url}` ? 'text-accent' : ''
                            }`}
                        >
                            {link.text}
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </MotionConfig>
    );
};

export default NavLinksMobile;
