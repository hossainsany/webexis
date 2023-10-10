import { services } from '@constants';
import Image from 'next/image';
import Link from 'next/link';

const Services = ({ bgColor, itemColor }) => {
    return (
        <section className={`${bgColor ? bgColor : 'bg-dark-gray'}`}>
            <div className='container mx-auto'>
                <div className='text-center text-dark-white mb-[50px] md:mb-[100px]'>
                    <h2 className='text-4xl font-semibold'>Our Services</h2>
                    <p className='pt-2'>Empowering Your Online Presence</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    {services.map(({ id, title, body, src, link }) => (
                        <div
                            className={`w-full md:w-[32%] lg:w-[30%] mb-5 md:mb-0 rounded-md overflow-hidden group/{scaleHover} ${
                                itemColor ? itemColor : 'bg-light-gray'
                            }`}
                            key={id}
                        >
                            <div className='min-h-[250px] md:min-h-[200px] lg:min-h-[250px] xl:min-h-[300px] relative overflow-hidden'>
                                <Image
                                    src={src}
                                    alt='services thumbnail'
                                    fill
                                    className='object-cover group-hover/{scaleHover}:scale-[1.05] transition-300'
                                />
                            </div>

                            <div className='p-5 lg:p-8'>
                                <h2 className='text-lg font-semibold pb-2'>{title}</h2>
                                <p className='pb-2'>{body}</p>
                                <Link href={link} className='text-accent hover:underline'>
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
