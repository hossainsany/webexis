import Link from 'next/link';

const ComingSoon = ({ page }) => {
    return (
        <div className=' bg-lightBg'>
            <div className='container flex flex-col justify-center items-center mx-auto min-h-[50vh] text-center px-2 md:px-0'>
                <h1 className='text-2xl font-semibold mb-2'>
                    Website under development, {page} page coming soon.
                </h1>
                <Link href='/' className='text-accent text-lg font-medium  hover:underline'>
                    Visit Home
                </Link>
            </div>
        </div>
    );
};

export default ComingSoon;
