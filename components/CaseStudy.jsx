import caseStudiesData from '@/constants/case-study';
import Image from 'next/image';
import CaseStudyContent from './CaseStudyContent';
import CaseStudyText from './CaseStudyText';
import { useEffect, useState } from 'react';
import { Review } from '.';
import NotFound from './NotFound';

const CaseStudy = ({ slug }) => {
    const [currentStudy, setCurrentStudy] = useState([]);

    useEffect(() => {
        setCurrentStudy(caseStudiesData.find((item) => item.caseStudy.slug === slug)?.caseStudy);
    }, []);

    console.log(currentStudy);

    return (
        <>
            {currentStudy === undefined || currentStudy.length === 0 ? (
                <NotFound />
            ) : (
                <main className='py-24 bg-lightBg dark:bg-darkBg text-secondary dark:text-primary'>
                    <div className='container mx-auto px-4 md:px-0'>
                        <div className='w-full h-[200px] mt-[-96px] mb-12 rounded-lg overflow-hidden'>
                            <Image
                                src='/placeholder-case-study.jpg'
                                alt='/'
                                className='h-full w-full object-cover'
                                height={600}
                                width={600}
                            />
                        </div>
                        <div className=''>
                            <h1 className='text-center text-2xl font-semibold w-full md:w-[60%] mx-auto'>
                                {currentStudy.title}
                            </h1>
                        </div>
                        <div className='mt-12'>
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
                            <CaseStudyContent img={currentStudy.img} textFirst={false}>
                                <CaseStudyText
                                    title={currentStudy.solution.title}
                                    description={currentStudy.solution.overview}
                                />
                                <CaseStudyText list={currentStudy.solution.features} />
                            </CaseStudyContent>
                            <CaseStudyContent img={currentStudy.img} textFirst={true}>
                                <CaseStudyText
                                    title={'Results'}
                                    description={currentStudy.solution.overview}
                                />
                                <CaseStudyText list={currentStudy.results.features} />
                            </CaseStudyContent>
                            <div className='flex justify-between flex-col lg:flex-row items-center mt-8'>
                                <div className='flex-1'>
                                    <Review
                                        title={currentStudy.clientTestimonial.title}
                                        desc={currentStudy.clientTestimonial.description}
                                        img={currentStudy.clientTestimonial.img}
                                        author={currentStudy.clientTestimonial.author}
                                        position={currentStudy.clientTestimonial.position}
                                        url={currentStudy.clientTestimonial.url}
                                        tailwind={'flex-1'}
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
