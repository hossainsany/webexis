'use client';

import { useContext, useState, useEffect } from 'react';
import { CTA, ErrorAnimate, Filter, LoadingAnimate, PageHero, ProjectCard } from '@/components';
import CaseStudyContext from '@/context/CaseStudyContext';

const PortfolioPage = () => {
    const { projects, isPending, error } = useContext(CaseStudyContext);

    const [industry, setIndustry] = useState('all');
    const [techStack, setTechStack] = useState('all');
    const [selectedProjects, setSelectedProjects] = useState(projects);

    const filter = () => {
        const filteredProjects =
            projects &&
            projects.filter((project) => {
                const projectTags = project.caseStudy.tags.map((tag) => tag.toLowerCase());
                const industyMatch =
                    industry === 'all' || projectTags.some((tag) => tag.includes(industry));
                const techStackMatch =
                    techStack === 'all' || projectTags.some((tag) => tag.includes(techStack));
                return industyMatch && techStackMatch;
            });

        setSelectedProjects(filteredProjects);
    };

    const handleFilter = (e) => {
        e.preventDefault();
        filter();
    };

    useEffect(() => {
        filter();
    }, [projects, industry, techStack]);

    const headingText =
        "Explore how we've transformed businesses with our expert web solutions. From boosting sales for restaurants and digital marketers to crafting WordPress plugin pages and roofing company sites, we deliver proven success.";
    const headingTextShort =
        "Explore how we've transformed businesses with our expert web solutions.";
    const headingImg = '/portfolio-hero.png';
    return (
        <>
            <PageHero
                headingTitle={'WebExis Portfolio'}
                headingSubtitle={'Our Showcase of Success'}
                headingText={headingText}
                headingTextShort={headingTextShort}
                headingImg={headingImg}
            />
            <Filter
                industry={industry}
                setIndustry={setIndustry}
                techStack={techStack}
                setTechStack={setTechStack}
                handleFilter={handleFilter}
            />
            <div className='pt-14 pb-24 bg-lightBg-alt dark:bg-darkBg-alt dark:text-primary'>
                <div className='container mx-auto px-4 md:px-0'>
                    <div className='flex flex-wrap justify-between'>
                        {isPending ? (
                            <div className='flex flex-col justify-center items-center text-2xl font-medium w-full mt-6'>
                                <LoadingAnimate text='Just a moment! The portfolio projects are on thier way!' />
                            </div>
                        ) : error ? (
                            <div className='flex flex-col justify-center items-center text-2xl font-medium w-full mt-10'>
                                <ErrorAnimate
                                    text={
                                        error
                                            ? `Loading Failed, Error: ${error}. Please refresh the page.`
                                            : 'No Results Found, Try Something Different.'
                                    }
                                />
                            </div>
                        ) : (
                            selectedProjects &&
                            selectedProjects.map((singleStudy) => (
                                <ProjectCard
                                    caseStudy={singleStudy.caseStudy}
                                    key={singleStudy._id}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
            <CTA bgAlt={false} />
        </>
    );
};

export default PortfolioPage;
