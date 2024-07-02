import React from 'react';

const NotFound = () => {
    return (
        <main className='min-h-[60vh] flex justify-center items-center text-center'>
            <div className='container'>
                <h1 className='text-4xl font-bold leading-[44px] text-accent text-transparent bg-clip-text bg-gradient-to-br from-[#273958] to-[#3767b5]'>
                    404 - Page Not Found <span className='text-secondary'>|</span> Website Still
                    Under Development.
                </h1>
                <p className='pt-4 text-lg'>
                    Navigate back to the{' '}
                    <a href='/' className='text-accent font-semibold hover:underline'>
                        homepage
                    </a>
                    .
                </p>
            </div>
        </main>
    );
};

export default NotFound;
