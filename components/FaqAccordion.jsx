'use client';

import { easeInOut, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FaqAccordion = ({ answer, question, i }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleWidth = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWidth);
        handleWidth();

        return () => {
            window.removeEventListener('resize', handleWidth);
        };
    }, []);

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: i * 0.1 }}
            className='relative mb-6'
        >
            <div
                className='bg-lightBg dark:bg-darkBg py-4 px-6 rounded-md flex justify-between relative z-10 cursor-pointer'
                onClick={() => setIsOpen((o) => !o)}
            >
                <h3 className='text-lg md:text-xl font-medium md:font-semibold'>{question}</h3>{' '}
                <motion.div animate={isOpen ? 'open' : 'closed'} className=' w-8 h-8 rounded-ful'>
                    <motion.span
                        className='absolute h-[3px] w-6 md:h-1 md:w-7 bg-secondary dark:bg-primary inline-block top-[47%] right-[26px] -translate-x-1/2 translate-y-[-48%] rounded'
                        style={{ rotate: '0deg' }}
                        variants={{
                            open: {
                                rotate: '45deg',
                            },
                            closed: {
                                rotate: '0deg',
                            },
                        }}
                        transition={{ ease: 'easeInOut' }}
                    ></motion.span>
                    <motion.span
                        className='absolute h-[3px] w-6 md:h-1 md:w-7 bg-secondary dark:bg-primary inline-block top-[47%] right-[26px] -translate-x-1/2 translate-y-[-48%] rounded'
                        style={{ rotate: '90deg' }}
                        variants={{
                            open: {
                                rotate: '-45deg',
                            },
                            closed: {
                                rotate: '90deg',
                            },
                        }}
                        transition={{ ease: 'easeInOut' }}
                    ></motion.span>
                </motion.div>
            </div>
            <motion.div
                className='bg-light-tertiary shadow-sm dark:bg-tertiary px-6 opacity-0 rounded-b-md'
                style={{
                    height: 0,
                }}
                animate={isOpen ? 'open' : 'closed'}
                variants={{
                    open: {
                        opacity: 1,
                        height: 'auto',
                    },
                    closed: {
                        opacity: 0,
                        height: 0,
                    },
                }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
            >
                <motion.p
                    className='py-4'
                    initial={{ opacity: 0, y: -20 }}
                    animate={isOpen ? 'open' : 'closed'}
                    variants={{
                        open: {
                            opacity: 1,
                            y: 0,
                        },
                        closed: {
                            opacity: 0,
                            y: -20,
                        },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: isOpen ? 0.3 : 0,
                    }}
                >
                    {answer}
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default FaqAccordion;
