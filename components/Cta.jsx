import Link from 'next/link';

const Cta = () => {
    return (
        <section className='bg-light-gray min-h-[10vh] py-[65px] md:min-h-[30vh] flex justify-start bg-[url("/assets/cta-bg.png")] bg-no-repeat bg-cover bg-right bg-blend-overlay md:bg-blend-normal md:bg-center'>
            <div className='container mx-auto flex justify-between items-start flex-col md:flex-row md:items-center'>
                <div className='flex-2'>
                    <h2 className='text-2xl font-semibold pb-2 md:w-[90%] lg:w-full'>
                        Let&apos;s Connect and Ignite Your Online Success
                    </h2>
                    <p className='md:w-[90%] lg:w-[65%]'>
                        We&apos;re here to answer your questions, discuss your goals, and kickstart
                        your journey to online excellence. Contact us today!
                    </p>
                </div>
                <div className='flex-1 flex justify-start md:justify-end pt-4 md:pt-0'>
                    <Link href='/contact' className='btn rounded-full md:min-w-[135px] xl:min-w-0'>
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Cta;
