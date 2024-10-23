'use client';

import { useState } from 'react';
import { toast, Toaster } from 'sonner';

const ContactDetails = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText('info@webexis.net');
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);

        toast.info('Email copied to clipboard.');
    };

    return (
        <div className='text-secondary dark:text-primary flex-1 flex flex-col order-last md:order-first mt-12 md:mt-0'>
            <Toaster richColors position='bottom-right' />
            <h2 className='text-2xl font-semibold mb-4'>Contact details</h2>
            <div className='relative mb-6'>
                <h3 className='text-lg font-semibold '>Email</h3>
                <p
                    className='hover:text-accent transition-colors cursor-pointer'
                    onClick={handleCopy}
                >
                    info@webexis.net
                </p>
            </div>
            <div className='mb-6'>
                <h3 className='text-lg font-semibold mb-3'>Address</h3>
                <div className=''>
                    <h4 className='font-medium mb-1'>United States:</h4>
                    <p>4300 Ridgecrest Dr SE Suite L #515,</p>
                    <p>Rio Rancho, NM 87124,</p>
                    <p>United States</p>
                </div>
                <h3 className='py-5 text-lg font-semibold'>Or</h3>
                <div className=''>
                    <h4 className='font-medium mb-1'>Bangladesh:</h4>
                    <p>Jaflong, Gowainghat,</p>
                    <p>Sylhet 3151, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
