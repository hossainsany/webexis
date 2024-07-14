import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ caseStudy, tailwindClass }) => {
    const style = [
        `w-full md:w-[49%] lg:w-full p-4 md:p-6 lg:p-10 mb-10 rounded bg-lightBg dark:bg-darkBg flex flex-col lg:flex-row hover:shadow-lg transition-all duration-300 ease-linear ${tailwindClass}`,
    ];
    return (
        <div className={style}>
            <div className='md:basis-1/4 order-2 lg:order-1 mb-6 md:mb-0 flex flex-col md:max-h-[120px] lg:max-h-[300px]'>
                <h3 className='text-2xl md:text-[30px] lg:text-[30px] lg:leading-10 font-bold capitalize mb-4 md:mb-5 mt-0'>
                    {caseStudy.name}
                </h3>
                <div className='flex flex-wrap gap-x-2 gap-y-1'>
                    {caseStudy.tags.map((tag) => (
                        <div
                            key={tag.id}
                            className='text-sm bg-accent py-[2px] px-1 md:py-1 md:px-2 text-primary rounded'
                        >
                            <p>{tag.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className=' order-3 lg:order-2 md:basis-3/5 lg:px-6 md:mt-6 lg:mt-14 flex flex-col justify-between lg:items-end'>
                <div className=''>
                    {caseStudy.shortDesc.map((desc) => (
                        <p key={desc.id} className='mb-4 md:mb-8 text-base'>
                            {desc.desc}
                        </p>
                    ))}
                </div>

                <div className='flex gap-x-1 '>
                    <Link
                        href={`/case-studies/${caseStudy.slug}`}
                        className='btn bg-secondary text-primary'
                    >
                        View Case Study
                    </Link>
                </div>
            </div>
            <div className='md:basis-1/4 order-1 mb-6 lg:mb-0 lg:order-3 min-w-[200px]  group'>
                <div className='w-full lg:w-[280px] h-full rounded overflow-hidden'>
                    <Image
                        src={caseStudy.img}
                        alt='project img'
                        width={400}
                        height={400}
                        className='block h-full w-full object-cover group-hover:scale-[105%] transition-all duration-300 ease-out'
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
