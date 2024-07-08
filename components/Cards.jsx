import Image from 'next/image';

const Cards = ({ title, desc, img, imgAlt }) => {
    return (
        <div className='card bg-lightBg-alt dark:bg-tertiary p-4 lg:p-10 rounded-lg mb-10 w-full md:w-[32%] lg:w-[30%] hover:shadow-lg transition-all duration-300'>
            <div className='img'>
                <Image src={img} alt={imgAlt} height={640} width={640} />
            </div>
            <div className='text'>
                <h3 className='text-xl font-semibold pb-2'>{title}</h3>
                <p className='text-base'>{desc}</p>
            </div>
        </div>
    );
};

export default Cards;
