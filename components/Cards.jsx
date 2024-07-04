import Image from 'next/image';

const Cards = ({ title, desc, img }) => {
    return (
        <div className='card bg-lightBg-alt dark:bg-tertiary p-4 lg:p-10 rounded-lg mb-10 w-full md:w-[32%] lg:w-[30%] hover:drop-shadow-2xl transition-all hover:transition-all hover:duration-300 hover:cursor-pointer'>
            <div className='img'>
                <Image src={img} alt={`${title} image`} height={640} width={640} />
            </div>
            <div className='text'>
                <h4 className='text-xl font-semibold pb-2'>{title}</h4>
                <p className='text-base'>{desc}</p>
            </div>
        </div>
    );
};

export default Cards;
