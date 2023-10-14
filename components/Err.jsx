import Link from 'next/link';

const Err = ({ title, desc, errCode }) => {
    return (
        <div>
            <h1 className='text-2xl font-bold pb-5'>{title}</h1>
            <h2
                className={` font-bold ${
                    errCode === 'Success' ? 'text-[80px]' : 'text-[100px] pb-3'
                } mt-[-25px] `}
            >
                {errCode}
            </h2>
            <p className='max-w-[640px] mx-auto'>{desc}</p>
            <p className='pt-3 font-semibold'>
                Navigating back to the{' '}
                <Link href='/' className='text-accent hover:underline'>
                    homepage
                </Link>
                .
            </p>
        </div>
    );
};

export default Err;
