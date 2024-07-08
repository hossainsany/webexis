import ProjectCard from './ProjectCard';

const projects = [
    {
        id: 1,
        title: 'webexis',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias dolore ea pariatur repellendus? Modi reiciendis, ipsam asperiores labore error, quas odit molestias et, quod fugiat mollitia placeat architecto? Vero.',
        tags: ['web design', 'web developemt'],
        img: '/test-project.png',
    },
    {
        id: 2,
        title: 'easyielts',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias dolore ea pariatur repellendus? Modi reiciendis, ipsam asperiores labore error, quas odit molestias et, quod fugiat mollitia placeat architecto? Vero.',
        tags: ['social media marketing', 'ads marketing'],
        img: '/test-project.jpg',
    },
    {
        id: 3,
        title: 'shahedexpo',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias dolore ea pariatur repellendus? Modi reiciendis, ipsam asperiores labore error, quas odit molestias et, quod fugiat mollitia placeat architecto? Vero.',
        tags: ['web develpment', 'ads marketing'],
        img: '/test-project.jpg',
    },
];

const Portfolio = () => {
    return (
        <section className='py-24 bg-lightBg-alt dark:bg-darkBg-alt text-secondary dark:text-primary'>
            <div className='container mx-auto'>
                <div className='mb-0'>
                    <h2 className='text-2xl font-semibold text-center'>Explore Our Portfolio</h2>
                    <p className='text-center'>Coming soon</p>
                </div>
                {/* <div className=''>
                    {projects.map((p) => (
                        <ProjectCard
                            key={p.id}
                            title={p.title}
                            body={p.body}
                            tags={p.tags}
                            img={p.img}
                        />
                    ))}
                </div> */}
            </div>
        </section>
    );
};

export default Portfolio;
