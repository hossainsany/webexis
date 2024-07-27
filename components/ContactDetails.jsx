'use client';

import { Facebook, Instagram, Linkedin, Twitter } from '@/assets/svg';
import { useState } from 'react';

const ContactDetails = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText('info@webexis.net');
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <div className='text-secondary dark:text-primary flex-1 flex flex-col order-last md:order-first mt-12 md:mt-0'>
            <h2 className='text-2xl font-semibold mb-4'>Contact details</h2>
            <div className='relative mb-6'>
                <h3 className='text-lg font-semibold '>Email</h3>
                <p
                    className='hover:text-accent transition-colors cursor-pointer'
                    onClick={handleCopy}
                >
                    info@webexis.net
                </p>
                <p
                    className={`absolute bottom-[0px] left-[25%] text-sm bg-accent px-2 py-[2px] rounded-lg opacity-0 transition-all duration-500 ease-in-out ${
                        isCopied ? 'opacity-85' : 'opacity-0'
                    }`}
                >
                    ✅ Copied
                </p>
            </div>
            <div className='mb-6'>
                <h3 className='text-lg font-semibold '>Address</h3>
                <p>Jaflong, Sylhet 3151, Bangladesh</p>
            </div>
            <div className='mb-6'>
                <h3 className='text-lg font-semibold '>WhatsApp</h3>
                <p>
                    Text Us on{' '}
                    <a
                        href='https://wa.me/message/72E663G7OYAWJ1'
                        className='text-accent hover:underline'
                    >
                        WhatsApp
                    </a>
                </p>
            </div>
            <div className=''>
                <h3 className='text-lg font-semibold'>Follow Us</h3>
                <ul className='flex gap-2 mt-1'>
                    <li>
                        <a
                            href='https://www.linkedin.com/company/webexis'
                            className='h-[40px] w-[40px] bg-darkBg-alt flex justify-center items-center rounded-full group hover:bg-accent border-[1px] border-accent/25 trainsition-colors'
                        >
                            <Linkedin className='h-[25px] w-[25px] fill-primary' />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.instagram.com/webexis_/'
                            className='h-[40px] w-[40px] bg-darkBg-alt flex justify-center items-center rounded-full group hover:bg-accent border-[1px] border-accent/25 trainsition-colors'
                        >
                            <Instagram className='h-[25px] w-[25px] fill-primary' />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.facebook.com/webexis.net/'
                            className='h-[40px] w-[40px] bg-darkBg-alt flex justify-center items-center rounded-full group hover:bg-accent border-[1px] border-accent/25 trainsition-colors'
                        >
                            <Facebook className='h-[25px] w-[25px] fill-primary' />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://twitter.com/WebExis_'
                            className='h-[40px] w-[40px] bg-darkBg-alt flex justify-center items-center rounded-full group hover:bg-accent border-[1px] border-accent/25 trainsition-colors'
                        >
                            <Twitter className='h-[25px] w-[25px] fill-primary' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContactDetails;
