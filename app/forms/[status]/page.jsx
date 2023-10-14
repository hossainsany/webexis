'use client';
import { usePathname } from 'next/navigation';

import { Err } from '@components';

const formStatus = () => {
    const pathName = usePathname();

    return (
        <section className='min-h-[45vh] mx-auto flex flex-col justify-center items-center text-center bg-light-gray'>
            <div className='container mx-auto'>
                {pathName === '/forms/form-success' && (
                    <Err
                        title='Success! Your Form Submission Was Received.'
                        desc='Thank you for submitting your form. Your information has been successfully received, and we will be in touch with you shortly. You can now rest assured that your request is in safe hands.'
                        errCode='Success'
                    />
                )}
                {pathName === '/forms/400' && (
                    <Err
                        title='Oops! Something Went Wrong with Your Form Submission.'
                        desc='We apologize for the inconvenience, but it seems that there was an error with your form submission. Please double-check the information you provided and try again.'
                        errCode='404'
                    />
                )}
            </div>
        </section>
    );
};

export default formStatus;
