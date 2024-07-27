'use client';

import { motion } from 'framer-motion';
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
            className='relative mb-6 flex flex-col'
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
            <motion.p
                className='bg-light-tertiary shadow-sm dark:bg-tertiary px-6 opacity-0 rounded-b-md'
                style={{
                    height: 0,
                    paddingTop: '0px',
                    paddingBottom: '0px',
                }}
                animate={isOpen ? 'open' : 'closed'}
                variants={{
                    open: {
                        opacity: 1,
                        height:
                            width < 769
                                ? '180px'
                                : width > 768 && width < 1024
                                ? '170px'
                                : width > 1023 && width < 1280
                                ? '125px'
                                : '100px',
                        paddingTop: '16px',
                        paddingBottom: '16px',
                    },
                    closed: {
                        opacity: 0,
                        height: 0,
                        paddingTop: '0px',
                        paddingBottom: '0px',
                    },
                }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
            >
                {answer}
            </motion.p>
        </motion.div>
    );
};

export default FaqAccordion;
