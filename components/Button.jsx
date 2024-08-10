'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Button = ({ link, children }) => {
    return (
        <Link href={link}>
            <motion.button
                className={` py-[12px] px-[34px] dark:py-2.5 dark:px-8 dark:border-2 dark:border-accent rounded-md relative radial-gradient overflow-hidden `}
                initial={{ '--x': '-100%' }}
                whileHover={{ '--x': '100%' }}
                transition={{
                    duration: 0.3,
                    type: 'spring',
                    stiffness: '20',
                    damping: 10,
                    mass: 2,
                }}
            >
                <span className='tracking-wide text-primary h-full w-full block relative linear-gradient z-10'>
                    {children}
                </span>
                <span className='block absolute inset-0 p-px linear-overlay' />
            </motion.button>
        </Link>
    );
};

export default Button;
