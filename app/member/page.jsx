import { MemberCard, PageHero } from '@/components';
import { members } from '@/data';

const MembersPage = () => {
    return (
        <>
            <PageHero
                headingImg='/hero.png'
                headingTitle='Meet Our Team'
                headingSubtitle='Passionate Professionals, Driven by Innovation'
                headingText='Our team consists of talented experts dedicated to delivering creative solutions and exceptional results. Together, we bring your vision to life.'
                bgAlt={true}
            />
            <section className='py-24 bg-lightBg dark:bg-darkBg text-secondary dark:text-primary'>
                <div className='container mx-auto px-4 lg:px-0'>
                    <ul className='flex items-start justify-center md:justify-start flex-wrap gap-4'>
                        {members.map((member) => (
                            <MemberCard
                                key={member.id}
                                name={member.name}
                                position={member.position}
                                url={member.slug}
                                img={member.img}
                            />
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default MembersPage;
