import Image from 'next/image';

const CaseStudyHeader = ({ currentProject }) => {
    return (
        <div className='relative z-0'>
            <div className='absolute w-full h-full top-0 left-0 overflow-hidden z-[-1]'>
                <Image
                    src='/noise.png'
                    alt='noise filter'
                    height={400}
                    width={1920}
                    className='h-full w-full object-cover'
                />
            </div>
            <div className='absolute w-full h-full top-0 left-0 overflow-hidden z-[-2]'>
                <Image
                    src='/blur-gradient.jpg'
                    alt='blue gradient background image'
                    height={400}
                    width={1920}
                    className='h-full w-full object-cover'
                />
            </div>
            <div className='container py-24 xl:py-0 mx-auto px-4 xl:px-0 min-h-[400px] flex flex-col lg:flex-row justify-center lg:justify-between items-center'>
                <div className='text-center xl:text-start text-primary mb-6 md:mb-0'>
                    <h1 className='text-5xl md:text-6xl xl:text-[100px] xl:leading-[110px] font-bold '>
                        Case Study
                    </h1>
                    {currentProject && (
                        <h2 className='text-xl xl:text-2xl font-medium mt-2 md:mt-0 ml-0 lg:ml-2'>
                            {currentProject.title}
                        </h2>
                    )}
                </div>
                {currentProject && (
                    <div className='hidden lg:flex max-w-full md:max-w-[400px] justify-center text-center xl:justify-start xl:text-start flex-wrap gap-y-8 xl:gap-y-4 text-primary'>
                        <div className='opacity-90 rounded-full border-[6px] xl:border-[10px] border-white/90 w-[150px] xl:w-[220px]'>
                            <Image
                                src='/logo.png'
                                height={220}
                                width={220}
                                alt='webexis logo'
                                className='w-full h-full object-cover scale-[1.03]'
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CaseStudyHeader;
