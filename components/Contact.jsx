'use client';

import { ContactForm } from '@components';
import Image from 'next/image';

const Contact = () => {
    return (
        <section className='bg-light-gray'>
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
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;
