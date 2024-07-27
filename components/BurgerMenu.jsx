'use client';

import { motion } from 'framer-motion';

const BurgerMenu = ({ clicked, onSetClicked }) => {
    const handleClick = () => {
        onSetClicked((c) => !c);
    };

    return (
        <motion.div
            onClick={handleClick}
            animate={clicked ? 'open' : 'closed'}
            className='relative cursor-pointer min-w-[30px] h-10 w-10 z-10'
            role='button'
        >
            <motion.span
                style={{ top: '25%', left: '50%', x: '-50%', y: '-50%' }}
                className='absolute h-1 w-8 rounded bg-secondary dark:bg-primary'
                variants={{
                    open: {
                        top: ['25%', '50%', '50%'],
                        rotate: ['0deg', '0deg', '45deg'],
                    },
                    closed: {
                        top: ['50%', '50%', '25%'],
                        rotate: ['45deg', '0deg', '0deg'],
                    },
                }}
            ></motion.span>
            <motion.span
                style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
                className='absolute h-1 w-8 rounded bg-secondary dark:bg-primary '
                variants={{
                    open: {
                        top: ['50%', '50%', '50%'],
                        rotate: ['0deg', '0deg', '-45deg'],
                    },
                    closed: {
                        top: ['50%', '50%', '50%'],
                        rotate: ['-45deg', '0deg', '0deg'],
                    },
                }}
            ></motion.span>
            <motion.span
                style={{ bottom: '25%', left: '58%', x: '-50%', y: '50%' }}
                className='absolute h-1 w-6 rounded bg-secondary dark:bg-primary'
                variants={{
                    open: {
                        bottom: ['25%', '50%', '50%'],
                        rotate: ['0deg', '0deg', '45deg'],
                        opacity: [1, 1, 0],
                    },
                    closed: {
                        bottom: ['50%', '50%', '25%'],
                        rotate: ['45deg', '0deg', '0deg'],
                        opacity: [0, 0, 1],
                    },
                }}
            ></motion.span>
        </motion.div>
    );
};

export default BurgerMenu;
