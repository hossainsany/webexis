import { Moon, Sun } from '@/assets/svg';
import { useEffect, useState } from 'react';

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
        <button
            className='relative ml-0 md:ml-5 mr-5 md:mr-0 min-w-[25px] inline-block group delay-150 duration-300 ease-in-out'
            onClick={handleClick}
        >
            <div className='absolute bg-accent text-primary p-1 text-xs w-[80px] bottom-[-45px] left-[-28px] opacity-0 group-hover:md:opacity-100 transition-all duration-150 ease-in-out delay-700'>
                {isDark ? <h2>Light Mode</h2> : <h2>Dark Mode</h2>}
            </div>
            {isDark ? (
                <Sun
                    className={`w-[25px] h-[25px] md:w-[20px] md:h-[20px]  ${
                        isDark ? 'fill-white' : 'fill-secondary'
                    }`}
                />
            ) : (
                <Moon
                    className={`w-[25px] h-[25px] md:w-[22px] md:h-[22px] ${
                        isDark ? 'fill-white' : 'fill-secondary'
                    }`}
                />
            )}
        </button>
    );
};

export default DarkModeToggle;
