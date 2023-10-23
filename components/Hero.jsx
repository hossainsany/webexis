import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className='bg-dark-gray min-h-[92vh] md:min-h-[92.5vh] flex justify-center items-center relative overflow-hidden'>
            <div className='absolute top-[-550px] left-[-196px]  h-[800px] w-[350px] md:w-[400px] rotate-[186deg] lg:rotate-[175deg]'>
                <Image src='/assets/circle-lines.svg' alt='circle made with multiple lines' fill />
            </div>
            <div className='absolute bottom-[-100px] right-[-120px]  h-[400px] w-[315px] md:w-[500px] rotate-[12deg] opacity-70'>
                <Image src='/assets/wave.svg' alt='circle made with multiple lines' fill />
            </div>
            <div className='container mx-auto h-full flex flex-col md:flex-row items-center justify-between'>
                <div className='text text-center  order-2 md:order-1 md:text-start text-white pb-5 md:pb-0'>
                    <h1 className='text-5xl lg:text-6xl font-bold pb-3'>WebExis</h1>
                    <h2 className='font-medium md:text-xl lg:text-xl  md:w-[90%]'>
                        Your one-stop solution for web development and digital marketing services,
                        empowering your online presence with innovation and strategy!
                    </h2>
                </div>
                <div className='min-w-[50%] flex justify-end items-center order-1 md:order-2 '>
                    <div className='h-[350px] w-[350px] md:h-[480px] md:w-[480px] lg:h-[600px] lg:w-[600px] bg-transparent relative floating shadow-none'>
                        <Image
                            src='/assets/laptop.svg'
                            alt='illustrator of a laptop'
                            fill
                            priority
                            className='object-cover'
                        />
                    </div>
                </div>
            </div>
            <Link
                href='#about'
                className='absolute bottom-[35px]  opacity-80 animate-bounce scroll-smooth'
            >
                <Image
                    src='/assets/double-down.svg'
                    alt='double down arrow icon'
                    height={40}
                    width={40}
                    className=' text-accent cursor-pointer'
                />
            </Link>
        </section>
    );
};

export default Hero;
