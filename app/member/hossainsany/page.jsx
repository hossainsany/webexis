import Image from 'next/image';

const HossainSany = () => {
    return (
        <section className='bg-lightBg dark:bg-darkBg text-secondary dark:text-primary py-12 md:py-24'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between items-start bg-lightBg-alt dark:bg-tertiary p-5 md:p-10 rounded-xl shadow-lg'>
                    <div className='flex justify-center w-full md:w-auto'>
                        <div className='overflow-hidden rounded-lg max-w-[300px] mb-8 md:mb-0'>
                            <Image
                                src='/hossainsany.jpg'
                                width={500}
                                height={500}
                                alt=''
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>
                    <div className=' flex flex-col justify-between items-start min-h-0 md:min-h-[300px]'>
                        <div className=''>
                            <h2 className='text-2xl font-semibold '>Name: Hossain Sany</h2>
                            <h4 className='text-lg font-normal'>Position: Founder & CEO</h4>
                        </div>
                        <div className='pt-8 md:pt-0'>
                            <h4 className='text-xl font-semibold mb-2'>Contacts:</h4>
                            <ul>
                                <li className='mt-1'>
                                    Email:{' '}
                                    <a
                                        href='mailto:hossainsany@webexis.net'
                                        className='text-accent hover:underline'
                                    >
                                        hossainsany@webexis.net
                                    </a>
                                </li>
                                <li className='mt-1'>
                                    Personal Website:{' '}
                                    <a
                                        href='https://hossainsany.com'
                                        className='text-accent hover:underline'
                                    >
                                        hossainsany.com
                                    </a>
                                </li>
                                <li className='mt-1'>
                                    Linkedin:{' '}
                                    <a
                                        href='https://www.linkedin.com/in/hossainsany/'
                                        className='text-accent hover:underline'
                                    >
                                        linkedin.com/hossainsany/
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HossainSany;
