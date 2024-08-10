'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Spinner } from '@/assets/svg';

const ContactForm = ({ itemsEnd }) => {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageInput, setMessageInput] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_GET_FORM_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            router.push('/form-success');
        } catch (err) {
            console.error(err);
            router.push('/form-error');
        } finally {
            setLoading(false);
            setNameInput('');
            setEmailInput('');
            setMessageInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`flex-1  `}>
            <div
                className='flex flex-col mx-auto gap-4 md:justify-end md:items-end w-full'
                style={
                    itemsEnd
                        ? { justifyContent: 'flex-start', alignItems: 'end', flex: '1 1 0%' }
                        : { justifyContent: 'flex-end', alignItems: 'end' }
                }
            >
                <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
                    className='text-2xl font-semibold text-secondary dark:text-primary w-full text-center md:text-start mb-6 md:mb-0 md:min-w-[350px] lg:min-w-full'
                >
                    Lets get in touch
                </motion.h2>
                <motion.input
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                    type='text'
                    name='name'
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    required
                    placeholder='Your Name'
                    className='w-full md:[400px] lg:w-full py-3 px-4 rounded bg-lightBg-alt dark:bg-darkBg-alt  text-secondary dark:text-primary'
                />
                <motion.input
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
                    type='email'
                    name='email'
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    required
                    placeholder='Your Email'
                    className='w-full md:[400px] lg:w-full py-3 px-4 rounded bg-lightBg-alt dark:bg-darkBg-alt text-secondary dark:text-primary'
                />
                <input type='hidden' name='_gotcha' className='hidden' />
                <motion.textarea
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
                    value={messageInput}
                    name='message'
                    onChange={(e) => setMessageInput(e.target.value)}
                    required
                    rows={6}
                    placeholder='Your Message'
                    className='w-full md:[400px] lg:w-full py-3 px-4 rounded bg-lightBg-alt dark:bg-darkBg-alt text-secondary dark:text-primary'
                />

                <motion.button
                    className=' py-[12px] px-[34px] w-full dark:py-2.5 dark:px-8 dark:border-2 dark:border-accent rounded-md relative radial-gradient overflow-hidden'
                    initial={{ '--x': '-100%' }}
                    whileHover={{ '--x': '100%' }}
                    transition={{
                        duration: 0.3,
                        type: 'spring',
                        stiffness: '15',
                        damping: 13,
                        mass: 2,
                    }}
                    disabled={loading}
                >
                    <span className='tracking-wide text-primary h-full w-full block relative linear-gradient z-10'>
                        {loading ? (
                            <Spinner className='h-[24px] w-[25px] fill-primary animate-spin mx-auto' />
                        ) : (
                            'Submit'
                        )}
                    </span>
                    <span className='block absolute inset-0 p-px linear-overlay' />
                </motion.button>
            </div>
        </form>
    );
};

export default ContactForm;
