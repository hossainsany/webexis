import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section
            className='bg-lightBg pt-0 pb-24 md:py-24'
            id='hero'
            style={{ background: 'url("/hero-bg.png")', backgroundSize: 'cover' }}
        >
            <div className='container flex flex-col md:flex-row justify-center items-center mx-auto '>
                <div className=' md:flex-2 lg:flex-1 order-2 md:order-1 px-4'>
                    <h1 className='text-3xl md:text-4xl font-bold md:leading-[44px] pb-7 text-secondary'>
                        Webexis:{' '}
                        <span
                            className='text-transparent bg-clip-text bg-gradient-to-br from-[#273958] to-[#3767b5]'
                            style={{ color: 'transparent' }}
                        >
                            Web Design & Digital Marketing
                        </span>{' '}
                        for Your Businesse.
                    </h1>
                    <p className='pb-8 text-base'>
                        Transform your service-based business into a digital powerhouse with
                        Webexis. We specialize in creating stunning, custom websites and strategic
                        digital marketing campaigns tailored to your unique needs. Boost your online
                        presence, streamline your appointment scheduling, and generate more leads
                        with our all-in-one solutions. Our expert team is dedicated to helping you
                        achieve measurable results that exceed expectations. Ready to elevate your
                        business?
                    </p>
                    <Link href='/about' className='btn bg-darkBg text-primary '>
                        Learn More
                    </Link>
                </div>
                <div className='img flex-1 order-1 md:order-2'>
                    <Image
                        src={'/hero.png'}
                        alt='illustration of girl and boy infront of big computer monitor'
                        width={1087}
                        height={1087}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
