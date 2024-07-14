import { CTA } from '@/components';
import ProjectCard from '@/components/ProjectCard';
import caseStudiesData from '@/constants/case-study';

const PortfolioPage = () => {
    return (
        <main className='bg-lightBg dark:bg-darkBg dark:text-primary '>
            <div className=' '>
                <section className=' py-24 '>
                    <div className='container mx-auto px-4 md:px-0'>
                        <div className='text-center mb-24'>
                            <h1 className='text-2xl font-semibold'>Webexis Portfolio</h1>
                            <p className='text-base'>Our Showcase of Success</p>
                        </div>
                        <div className='flex flex-wrap justify-between'>
                            {caseStudiesData.map((singleStudy) => (
                                <ProjectCard
                                    caseStudy={singleStudy.caseStudy}
                                    key={singleStudy.caseStudy.id}
                                    tailwindClass={'bg-lightBg-alt dark:bg-darkBg-alt'}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <CTA borders={true} />
            </div>
        </main>
    );
};

export default PortfolioPage;
