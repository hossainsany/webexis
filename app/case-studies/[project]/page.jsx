'use client';

import { useContext, useEffect, useState, use } from 'react';
import CaseStudyContext from '@/context/CaseStudyContext';
import { CaseStudy, CaseStudyHeader, ErrorAnimate, LoadingAnimate } from '@/components';

const ProjectPage = props => {
    const params = use(props.params);
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
            <CaseStudyHeader currentProject={currentProject && currentProject.caseStudy} />

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
