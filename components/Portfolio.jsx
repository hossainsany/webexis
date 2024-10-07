'use client';

import Link from 'next/link';
import { AngleRight } from '@/assets/svg';
import { ErrorAnimate, LoadingAnimate, ProjectCard } from '.';
import { useContext, useEffect, useState } from 'react';
import CaseStudyContext from '@/context/CaseStudyContext';

const Portfolio = () => {
    const { projects, isPending, error } = useContext(CaseStudyContext);
    const [projectsPreview, setProjectPreview] = useState(null);

    useEffect(() => {
        projects && setProjectPreview(projects.slice(0, 3));
    }, [projects]);

    return (
        <section className='py-24 bg-lightBg-alt dark:bg-darkBg-alt text-secondary dark:text-primary'>
            <div className='container mx-auto px-4 lg:px-0'>
                <div className='mb-20'>
                    <h2 className='text-2xl font-semibold text-center'>Explore Our Portfolio</h2>
                    <p className='text-center'>See How We Transformed Businesses</p>
                </div>
                {projectsPreview && (
                    <Link
                        href='/case-studies'
                        className='min-w-[80px] max-w-[90px] ml-auto text-right text-accent text-lg font-semibold mb-4 flex justify-end group hover:text-secondary dark:hover:text-primary transition-all'
                    >
                        View All{' '}
                        <AngleRight className='w-[10px] ml-1 fill-accent group-hover:fill-secondary dark:group-hover:fill-primary transition-all' />
                    </Link>
                )}
                <div className='flex flex-wrap justify-between'>
                    {isPending ? (
                        <div className='flex flex-col justify-center items-center w-full'>
                            <LoadingAnimate text='Fetching projects, hang tight!' />
                        </div>
                    ) : error ? (
                        <div className='flex justify-center items-center flex-col w-full'>
                            <ErrorAnimate text='Oops! Something went wrong. Please refresh the page.' />
                        </div>
                    ) : (
                        projectsPreview &&
                        projectsPreview.map((project, i) => (
                            <ProjectCard key={project._id} caseStudy={project.caseStudy} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
