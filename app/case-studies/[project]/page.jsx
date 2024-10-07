'use client';

import { useContext, useEffect, useState } from 'react';
import CaseStudyContext from '@/context/CaseStudyContext';
import { Button, CaseStudy, ErrorAnimate, LoadingAnimate } from '@/components';
import RedirectLink from '@/components/RedirectLink';
import Image from 'next/image';

const ProjectPage = ({ params }) => {
    const slug = params.project;
    const { projects, isPending, error } = useContext(CaseStudyContext);

    const [currentProject, setCurrentProject] = useState(null);

    useEffect(() => {
        if (projects && projects.length > 0) {
            setCurrentProject(projects.find((project) => project.caseStudy.slug === slug));
        }
    }, [slug, projects]);

    return (
        <section className=' bg-lightBg dark:bg-darkBg text-secondary dark:text-primary'>
            <div className='relative z-0'>
                <div className='absolute w-full h-full top-0 left-0 overflow-hidden z-[-1]'>
                    <Image
                        src='/noise.png'
                        alt=''
                        height={400}
                        width={1920}
                        className='h-full w-full object-cover'
                    />
                </div>
                <div className='absolute w-full h-full top-0 left-0 overflow-hidden z-[-2]'>
                    <Image
                        src='/blur-gradient.jpg'
                        alt=''
                        height={400}
                        width={1920}
                        className='h-full w-full object-cover'
                    />
                </div>
                {/*sticky top-[62px] */}
                <div className='container py-24 xl:py-0 mx-auto px-4 xl:px-0 min-h-[400px] flex flex-col xl:flex-row justify-between items-center'>
                    <div className='text-center xl:text-start text-primary mb-6 md:mb-0'>
                        <h1 className='text-5xl md:text-6xl xl:text-[100px] xl:leading-[110px] font-bold '>
                            Case Study
                        </h1>
                        {currentProject && (
                            <h2 className='text-xl xl:text-2xl font-medium mt-2 md:mt-0 ml-0 lg:ml-2'>
                                {currentProject.caseStudy.title}
                            </h2>
                        )}
                    </div>
                    {currentProject && (
                        <div className='max-w-full md:max-w-[400px] flex justify-center text-center xl:justify-start xl:text-start flex-wrap gap-y-8 xl:gap-y-4 text-primary'>
                            <div className='mt-8 xl:mt-0'>
                                <h3 className='font-medium pb-2'>Tools and Technology Used:</h3>
                                <div className='flex flex-wrap justify-center xl:justify-start gap-x-2 opacity-75'>
                                    {currentProject.caseStudy.tags.map((tag, i, array) => (
                                        <p key={tag} className='italic'>
                                            {tag}
                                            {i < array.length - 1 ? ',' : ''}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className='flex justify-between md:justify-start gap-x-2 xl:gap-x-8 mt-8 xl:mt-0'>
                                <RedirectLink
                                    href={currentProject.caseStudy.content.srcCode.liveUrl}
                                    newTab={true}
                                >
                                    View Live Demo
                                </RedirectLink>
                                <RedirectLink
                                    href={currentProject.caseStudy.content.srcCode.githubUrl}
                                    newTab={true}
                                >
                                    View Source Code
                                </RedirectLink>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {isPending ? (
                <div className='py-24 flex flex-col justify-center items-center'>
                    <LoadingAnimate text='Just a moment! The case study is on its way...' />
                </div>
            ) : error ? (
                <div className='py-24 flex flex-col justify-center items-center'>
                    <ErrorAnimate text='Uh-oh! There was an error loading this case study. Please refresh the page.' />
                </div>
            ) : (
                currentProject && <CaseStudy currentProject={currentProject.caseStudy} />
            )}
        </section>
    );
};

export default ProjectPage;
