const Flag = () => {
    return (
        <div className='w-full h-[20px] relative overflow-hidden dark:opacity-75'>
            <div className='absolute top-0 left-0 w-full h-full '>
                <div className='container mx-auto h-full flex justify-center items-center px-4 xl:px-0'></div>
            </div>
            <div className='w-full h-full flex flex-col bg-secondary'>
                <div className='h-[35%] bg-[#000000] opacity-75'></div>
                <div className='h-[32%] bg-[#ffffff] opacity-75'></div>
                <div className='h-[33%] bg-[#009639] opacity-75'></div>
            </div>
            <div className='absolute top-[50%] left-[-8px] h-[30px] w-[30px] transform translate-y-[-50%] shadow-none'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                    className='h-full w-auto fill-[#b9242b]'
                >
                    <path d='M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z' />
                </svg>
            </div>
        </div>
    );
};

export default Flag;
