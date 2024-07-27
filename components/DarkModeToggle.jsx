'use client';

import { Moon, Sun } from '@/assets/svg';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    const handleClick = () => {
        setIsDark((d) => !d);
    };

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') setIsDark(true);
    }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <motion.button
            className='relative ml-0 md:ml-5 mr-5 md:mr-0 h-[27px] w-[27px] inline-block group delay-150 duration-300 ease-in-out'
            onClick={handleClick}
        >
            <div className='absolute bg-accent text-primary p-1 text-xs w-[80px] bottom-[-45px] right-[0] opacity-0 group-hover:md:opacity-100 transition-all duration-150 ease-in-out delay-700'>
                {isDark ? <h2>Light Mode</h2> : <h2>Dark Mode</h2>}
            </div>
            <motion.div>
                {isDark ? (
                    <Sun className='absolute h-[25px] w-[25px] fill-secondary dark:fill-primary top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
                ) : (
                    <Moon className='absolute h-[27px] w-[25px] fill-secondary dark:fill-primary top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
                )}
            </motion.div>
        </motion.button>
    );
};

export default DarkModeToggle;
