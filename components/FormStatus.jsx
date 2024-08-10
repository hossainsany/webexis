import Link from 'next/link';

const FormStatus = ({ text }) => {
    return (
        <section className=' bg-lightBg dark:bg-darkBg text-secondary dark:text-primary'>
            <div className='container flex flex-col justify-center items-center mx-auto min-h-[50vh] text-center px-4 md:px-0'>
                <h1 className='text-2xl font-semibold mb-2'>{text}</h1>
                <Link href='/' className='text-accent text-lg font-medium  hover:underline'>
                    Visit Home
                </Link>
            </div>
        </section>
    );
};

export default FormStatus;
