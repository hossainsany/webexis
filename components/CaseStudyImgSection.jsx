import Image from 'next/image';

const CaseStudyImgSection = ({ img }) => {
    return (
        <section className='h-[300px] md:h-[550px] lg:h-[850px] overflow-hidden flex justify-center items-center'>
            <Image
                src={img}
                height={850}
                width={1920}
                alt=''
                className='block w-full h-full object-cover'
            />
        </section>
    );
};

export default CaseStudyImgSection;
