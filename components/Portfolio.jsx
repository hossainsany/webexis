import Link from 'next/link';
import { AngleRight } from '@/assets/svg';
import { ProjectCard } from '.';
import { caseStudiesData } from '@/data';

const Portfolio = () => {
    const shortProjects = caseStudiesData.slice(0, 3);

    return (
        <section className='py-24 bg-lightBg-alt dark:bg-darkBg-alt text-secondary dark:text-primary'>
            <div className='container mx-auto px-4 md:px-0'>
                <div className='mb-20'>
                    <h2 className='text-2xl font-semibold text-center'>Explore Our Portfolio</h2>
                    <p className='text-center'>See How We Transformed Businesses</p>
                </div>
                <Link
                    href='/case-studies'
                    className='min-w-[80px] max-w-[90px] ml-auto text-right text-accent text-lg font-semibold mb-4 flex justify-end group hover:text-secondary dark:hover:text-primary transition-all'
                >
                    View All{' '}
                    <AngleRight className='w-[10px] ml-1 fill-accent group-hover:fill-secondary dark:group-hover:fill-primary transition-all' />
                </Link>
                <div className='flex flex-wrap justify-between'>
                    {shortProjects.map((p, i) => (
                        <ProjectCard key={p.caseStudy.id} caseStudy={p.caseStudy} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
