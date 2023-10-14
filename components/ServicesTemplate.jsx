import Image from 'next/image';

const ServicesTemplate = () => {
    return (
        <section className='bg-light-gray'>
            <div className='container mx-auto'>
                <div className='w-full min-h-[20vh]'>
                    <Image
                        src='/assets/services-header.jpg'
                        alt='people staring at code on computer screen'
                        fill
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesTemplate;
