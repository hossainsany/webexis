import { MemberCard } from '@/components';
import { members } from '@/data';

const MembersPage = () => {
    return (
        <section className='py-24 bg-lightBg dark:bg-darkBg text-secondary dark:text-primary'>
            <div className='container mx-auto px-4 lg:px-0'>
                <h1 className='text-2xl font-bold mb-4'>Meet Our Team:</h1>

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
    );
};

export default MembersPage;
