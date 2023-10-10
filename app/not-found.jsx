import Link from 'next/link';

const Found = () => {
    return (
        <section className='min-h-[45vh] mx-auto flex flex-col justify-center items-center text-center bg-dark-white'>
            <h1 className='text-2xl font-bold'>OPPS! Page Not Found.</h1>
            <h2 className='text-[100px] font-bold mt-[-25px]'>404</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>
                Please check the URL for any typos or try navigating back to the{' '}
                <Link href='/' className='text-accent hover:underline'>
                    homepage
                </Link>
                .
            </p>
        </section>
    );
};

export default Found;
