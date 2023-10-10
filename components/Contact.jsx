'use client';

import Image from 'next/image';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className='bg-dark-white'>
            <div className='container mx-auto'>
                <div className='text-center  mb-[50px] md:mb-[100px]'>
                    <h2 className='text-4xl font-semibold'>Contact Us</h2>
                    <p className='pt-2'>Let&apos;s Connect and Ignite Success</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center '>
                    <div className='min-h-[500px] w-full  relative rounded-md overflow-hidden flex-[100%] md:flex-[50%] floating'>
                        <Image
                            src='/assets/contact.svg'
                            alt='infographic of team member receiving emails'
                            fill
                            className='scale-x-[-100%]'
                        />
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-col flex-[100%] w-full md:flex-[35%] lg:flex-[25%] justify-end items-center md:items-end'
                    >
                        <input
                            type='text'
                            placeholder='Your Name'
                            name='name'
                            className='px-6 py-3 mb-3 rounded-md bg-dark-gray/[75%] text-dark-white w-full'
                        />
                        <input
                            type='email'
                            placeholder='Your Email'
                            name='email'
                            className='px-6 py-3 mb-3 rounded-md bg-dark-gray/[75%] text-dark-white w-full'
                        />
                        <textarea
                            name='message'
                            placeholder='Your Message'
                            rows='8'
                            className='px-6 py-3 mb-3 rounded-md bg-dark-gray/[75%] text-dark-white w-full'
                        ></textarea>
                        <button type='submit' className='btn rounded-md w-full'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
