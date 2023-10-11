import Image from 'next/image';
import Link from 'next/link';

const ImageCard = ({ id, title, body, src, link, itemColor }) => {
    return (
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
    );
};

export default ImageCard;
