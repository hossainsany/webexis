import Image from 'next/image';

const Hero = () => {
    return (
        <section className='bg-dark-gray md:min-h-[92.5vh] flex flex-col md:flex-row items-center justify-between'>
            <div className='text text-center md:text-start text-white pb-5 md:pb-0'>
                <h1 className='text-5xl lg:text-6xl font-bold pb-3'>WebExis</h1>
                <h2 className='font-medium md:text-xl lg:text-xl  md:w-[90%]'>
                    Your one-stop solution for web development and digital marketing services,
                    empowering your online presence with innovation and strategy!
                </h2>
            </div>
            <div className='min-w-[50%] flex justify-end items-center'>
                <div className='h-[350px] w-[350px] md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[500px] overflow-hidden rounded-full relative'>
                    <Image
                        src='/assets/hero-img.jpg'
                        alt='placeholder'
                        fill={true}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
