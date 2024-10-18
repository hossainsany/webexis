'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Spinner } from '@/assets/svg';
import axios from 'axios';
import { toast, Toaster } from 'sonner';

const ContactForm = ({}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            message,
        };

        try {
            setLoading(true);
            const res = await axios.post('/api/contact', formData);
            if (!res.data.OK) {
                throw new Error(`Something went wrong, status: ${res.status}`);
            }
            toast.success('Submission successful!');
            router.push('/form-success');
        } catch (err) {
            toast.error(err.message);
            router.push('/form-error');
        } finally {
            setLoading(false);
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='md:flex-1 w-full'>
            <div>
                <Toaster position='bottom-right' richColors />
            </div>
            <div className='flex flex-col mx-auto gap-y-4 md:justify-end md:items-end md:pb-6'>
                <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
                    className='text-2xl font-semibold text-secondary dark:text-primary w-full text-center md:text-start mb-6 md:mb-4 md:min-w-[350px] lg:min-w-full'
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder='Your Name'
                    className='w-full md:[400px] lg:w-full py-3 px-4 rounded-md bg-lightBg-alt dark:bg-darkBg-alt  text-secondary dark:text-primary'
                />
                <motion.input
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder='Your Email'
                    className='w-full md:[400px] lg:w-full py-3 px-4 rounded-md bg-lightBg-alt dark:bg-darkBg-alt text-secondary dark:text-primary'
                />
                <input type='hidden' name='_gotcha' className='hidden' />
                <motion.textarea
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
                    value={message}
                    name='message'
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    placeholder='Tell us about your project to get a free quote!'
                    className='w-full md:[400px] lg:w-full py-3 px-4 rounded-md bg-lightBg-alt dark:bg-darkBg-alt text-secondary dark:text-primary'
                />

                <motion.button
                    className={`py-[12px] px-[34px] w-full dark:py-2.5 dark:px-8 dark:border-2 dark:border-accent rounded-md relative radial-gradient overflow-hidden ${
                        loading ? 'cursor-not-allowed' : 'cursor-pointer'
                    }`}
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
                            <Spinner className='h-[24px] w-[25px] fill-accent animate-spin mx-auto' />
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
