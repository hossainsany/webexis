'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CTA, Filter, PageHero, ProjectCard } from '@/components';
import caseStudiesData from '@/constants/case-study';
import { useState } from 'react';

const PortfolioPage = () => {
    const [projects, setProjects] = useState(caseStudiesData);
    const [industry, setIndustry] = useState('all');
    const [techStack, setTechStack] = useState('all');
    console.log(industry, techStack, projects);

    const handleFilter = (e) => {
        e.preventDefault();

        const filterded = caseStudiesData.filter(({ caseStudy }) => {
            const industryMatch =
                industry === 'all' ||
                caseStudy.tags.some((tag) =>
                    tag.name.toLowerCase().includes(industry.toLowerCase())
                );
            const techStackMatch =
                techStack === 'all' ||
                caseStudy.tags.some((tag) =>
                    tag.name.toLowerCase().includes(techStack.toLowerCase())
                );

            return industryMatch && techStackMatch;
        });
        setProjects(filterded);
    };

    const headingText =
        "Explore how we've transformed businesses with our expert web solutions. From boosting sales for restaurants and digital marketers to crafting WordPress plugin pages and roofing company sites, we deliver proven success.";
    const headingTextShort =
        "Explore how we've transformed businesses with our expert web solutions.";
    const headingImg = '/portfolio-hero.png';
    return (
        <>
            <PageHero
                headingTitle={'WebExis Case Studies'}
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
                    <div layout className='flex flex-wrap justify-between'>
                        {projects.length < 1 ? (
                            <p className='text-center text-2xl font-semibold w-full'>
                                No Results Found, Try Something Different.
                            </p>
                        ) : (
                            projects.map((singleStudy) => (
                                <ProjectCard
                                    caseStudy={singleStudy.caseStudy}
                                    key={singleStudy.caseStudy.id}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
            <CTA bgAlt={true} />
        </>
    );
};

export default PortfolioPage;
