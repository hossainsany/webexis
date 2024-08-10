'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Review, CaseStudyContent, CaseStudyText, NotFound, Button } from '.';
import { caseStudiesData } from '@/data';

const CaseStudy = ({ slug }) => {
    const [currentStudy, setCurrentStudy] = useState([]);

    useEffect(() => {
        setCurrentStudy(caseStudiesData.find((item) => item.caseStudy.slug === slug)?.caseStudy);
    }, [slug]);

    return (
        <>
            {currentStudy === undefined || currentStudy.length === 0 ? (
                <NotFound />
            ) : (
                <main className='py-24 bg-lightBg dark:bg-darkBg text-secondary dark:text-primary'>
                    <div className='container mx-auto px-4 md:px-0'>
                        <div className='w-full h-[250px] md:h-[350px] mt-[-96px]  rounded-lg overflow-hidden relative'>
                            <Image
                                src='/casestudy-bg.jpg'
                                alt='/blurred image of code'
                                className='h-full w-full object-cover'
                                height={600}
                                width={600}
                            />
                            <div className='absolute top-0 left-0 w-full h-full text-center z-10 flex justify-center items-center backdrop-blur-sm'>
                                <h1 className='pt-[55px] md:pt-[96px] font-bold text-xl md:text-[30px] text-primary '>
                                    Case Study: {currentStudy.title}
                                </h1>
                            </div>
                        </div>

                        <div className=''>
                            <CaseStudyContent img={currentStudy.img} textFirst={true}>
                                <CaseStudyText
                                    title={currentStudy.clientOverview.title}
                                    description={currentStudy.clientOverview.description}
                                />
                                <CaseStudyText
                                    title={currentStudy.challenge.title}
                                    description={currentStudy.challenge.description}
                                />
                            </CaseStudyContent>
                            <CaseStudyContent img={currentStudy.img2} textFirst={false}>
                                <CaseStudyText
                                    title={currentStudy.solution.title}
                                    description={currentStudy.solution.overview}
                                />
                                <CaseStudyText list={currentStudy.solution.features} />
                            </CaseStudyContent>
                            <CaseStudyContent img={currentStudy.img3} textFirst={true}>
                                <CaseStudyText
                                    title={'Results'}
                                    description={currentStudy.results.overview}
                                />
                                <CaseStudyText list={currentStudy.results.features} />
                            </CaseStudyContent>
                            <div className='flex justify-between flex-col lg:flex-row items-center mt-20'>
                                <div className='flex-1'>
                                    <Review
                                        title={currentStudy.clientTestimonial.title}
                                        desc={currentStudy.clientTestimonial.description}
                                        img={currentStudy.clientTestimonial.img}
                                        author={currentStudy.clientTestimonial.author}
                                        position={currentStudy.clientTestimonial.position}
                                        url={currentStudy.clientTestimonial.url}
                                    />
                                </div>

                                <div className='flex-1 mt-6 lg:mt-0'>
                                    <div className='mb-6 '>
                                        <h2 className='text-lg font-semibold pb-4'>
                                            {currentStudy.conclusion.title}
                                        </h2>
                                        <p>{currentStudy.conclusion.description}</p>
                                    </div>
                                    <div className=''>
                                        <h2 className='text-lg font-semibold pb-4'>
                                            {currentStudy.aboutWebexis.title}
                                        </h2>
                                        <p>{currentStudy.aboutWebexis.description}</p>
                                    </div>
                                    <div className='pt-8 pb-3 flex justify-start items-center gap-4'>
                                        <p className='text-xl font-semibold'>View Project: </p>
                                        {currentStudy.demo.map(
                                            (link) =>
                                                link.url && (
                                                    <Button link={link.url} key={link.url}>
                                                        {link.title}
                                                    </Button>
                                                )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </>
    );
};

export default CaseStudy;
