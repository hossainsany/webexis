import Image from 'next/image';

const About = () => {
    return (
        <section className='bg-dark-white ' id='about'>
            <div className='container mx-auto'>
                <div className='text-center  mb-[50px] md:mb-[100px]'>
                    <h2 className='text-4xl font-semibold'>About Us</h2>
                    <p className='pt-2'>Discover Our Story and Mission</p>
                </div>

                <div className='flex items-center justify-between flex-col md:flex-row'>
                    <div className='order-2 md:order-1 md:flex-[60%] md:pr-5 lg:pr-20 xl:pr-60'>
                        <h3 className='text-xl font-semibold pb-3'>Who Are WebExis:</h3>
                        <p className='pb-8'>
                            At Webexis, we&apos;re passionate about transforming businesses into
                            digital powerhouses. In today&apos;s hyper-connected world, having a
                            robust online presence is more critical than ever. Our mission is to
                            help you unlock your business&apos;s full online potential.
                        </p>
                        <ul className='pb-8'>
                            <h3 className='text-xl font-semibold pb-3'>Why Choose Webexis?</h3>
                            <li className='pb-3 pl-5'>
                                <h4 className='pr-1 font-semibold inline-block'>
                                    <span className='inline-block pr-2 mb-[2px]'>
                                        <Image
                                            src='/assets/dot.svg'
                                            alt='icon of a orange dot'
                                            height={8}
                                            width={8}
                                        />
                                    </span>
                                    All-in-One Solution:
                                </h4>
                                We offer a comprehensive suite of web development and digital
                                marketing services, providing you with a one-stop solution for all
                                your online needs.
                            </li>
                            <li className=' pl-5'>
                                <h4 className='pr-1 font-semibold inline-block'>
                                    <span className='inline-block pr-2 mb-[2px]'>
                                        <Image
                                            src='/assets/dot.svg'
                                            alt='icon of a orange dot'
                                            height={8}
                                            width={8}
                                        />
                                    </span>
                                    Tailored to You:
                                </h4>
                                We understand that every business is unique. That&apos;s why our
                                team of experts customizes solutions to fit your specific goals and
                                target audience, ensuring your online presence is as unique as your
                                brand.
                            </li>
                        </ul>
                        <p className='pb-3'>
                            We don&apos;t just make promises; we deliver measurable results that
                            exceed expectations. Our data-driven approach ensures that every
                            strategy and campaign is optimized for success. Ready to ignite your
                            online presence? Let&apos;s start your digital success story today!
                        </p>
                    </div>
                    <div className='order-1 md:order-2 w-full md:flex-[40%] lg:flex-[30%] 2xl:flex-[25%]'>
                        <div className=' rounded-lg overflow-hidden min-h-[300px] md:min-h-[550px] relative mb-[50px] md:mb-0'>
                            <Image
                                src='/assets/about-img.jpg'
                                alt='laptop on a wooden desk'
                                fill
                                className='object-cover'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
