import { Button, CaseStudyImgSection, CaseStudySection, CTA, Review } from '.';
import Faq from './Faq';

const CaseStudy = ({ currentProject }) => {
    const cta = currentProject.content.cta
        .split('\n')
        .filter((str) => str.trim() !== '')
        .map((text) => text.replace(/\\n/g, '').trim());

    return (
        <>
            <CaseStudySection
                title1='Overview'
                body1={currentProject.content.overview}
                title2='Challenges'
                body2={currentProject.content.challenges}
                img={currentProject.content.img1}
                tags={currentProject.tags}
                links={currentProject.content.srcCode}
            />
            <CaseStudyImgSection img={currentProject.content.img4} />
            <CaseStudySection
                title1='Solution'
                obj={currentProject.content.solutions}
                img={currentProject.content.img2}
            />
            <CaseStudySection
                title1='Results'
                obj={currentProject.content.results}
                img={currentProject.content.img3}
                imgFirst={false}
            />
            {/*  todo: review section & releted case study section */}
            <section className='py-24 bg-lightBg dark:bg-darkBg'>
                <div className='container mx-auto px-4 xl:px-0 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8'>
                    <Review
                        desc={currentProject.content.testomonial.body}
                        img={currentProject.content.testomonial.img}
                        author={currentProject.content.testomonial.author}
                        position={currentProject.content.testomonial.position}
                        stars={false}
                    />
                    <div className='w-full lg:w-1/2 h-full flex flex-col justify-between mt-8 lg:mt-0'>
                        <div className=''>
                            <h2 className='text-2xl font-semibold mb-8'>
                                Ready to Transform Your Online Presence?
                            </h2>
                            {cta.map((text, i) => (
                                <p key={i} className='pb-4'>
                                    {text}
                                </p>
                            ))}
                        </div>
                        <div className=''>
                            <Button link='/contact'>Get A Free Quote</Button>
                        </div>
                    </div>
                </div>
            </section>
            <Faq />
            <CTA />
        </>
    );
};

export default CaseStudy;
