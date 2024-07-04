'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Spinner } from '@/assets/svg';

const Contact = () => {
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
        <section className='py-24 bg-lightBg dark:bg-darkBg'>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0'>
                <div className='flex-1 flex justify-center items-center mb-0 md:mb-[-96px] my-[-96px]'>
                    <Image
                        src={'/contact.png'}
                        alt='picture of contact'
                        className='block'
                        width={600}
                        height={500}
                    />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-4 flex-1 md:justify-end md:items-end'
                >
                    <h2 className='text-2xl font-semibold dark:text-primary md:min-w-[350px] lg:min-w-[500px]'>
                        Lets get in touch
                    </h2>
                    <input
                        type='text'
                        name='name'
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        required
                        placeholder='Your Name'
                        className='w-[350px] md:[400px] lg:w-[500px] py-2 px-4 rounded bg-lightBg-alt dark:bg-darkBg-alt  text-secondary dark:text-primary'
                    />
                    <input
                        type='email'
                        name='email'
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        required
                        placeholder='Your Email'
                        className='w-[350px] md:[400px] lg:w-[500px] py-2 px-4 rounded bg-lightBg-alt dark:bg-darkBg-alt text-secondary dark:text-primary'
                    />
                    <input type='hidden' name='_gotcha' className='hidden' />
                    <textarea
                        value={messageInput}
                        name='message'
                        onChange={(e) => setMessageInput(e.target.value)}
                        required
                        rows={6}
                        placeholder='Your Message'
                        className='w-[350px] md:[400px] lg:w-[500px] py-2 px-4 rounded bg-lightBg-alt dark:bg-darkBg-alt text-secondary dark:text-primary'
                    />
                    <button className='btn w-[350px] md:[400px] lg:w-[500px] bg-darkBg-alt text-primary'>
                        {loading ? (
                            <Spinner className='h-[24px] w-[25px] fill-primary animate-spin mx-auto' />
                        ) : (
                            'Submit'
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
