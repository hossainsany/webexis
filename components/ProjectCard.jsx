import Image from 'next/image';

const ProjectCard = ({ title, body, img, tags }) => {
    return (
        <div className='w-full p-10 rounded bg-primary dark:bg-darkBg mb-10 flex hover:shadow-lg transition-all duration-300 ease-linear'>
            <div className='basis-1/4'>
                <h3 className='text-4xl font-bold capitalize mb-5'>{title}</h3>
                <div className='flex flex-wrap gap-x-2 gap-y-1'>
                    {tags.map((tag) => (
                        <p key={tag} className='text-sm bg-accent py-1 px-2 text-primary rounded'>
                            {tag}
                        </p>
                    ))}
                </div>
            </div>
            <div className='basis-3/5 px-6 mt-14 flex flex-col justify-between items-end'>
                <p>{body}</p>
                <p className='w-full'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam fuga, eveniet
                    quaerat ea eos.
                </p>
                <div className='flex gap-x-1'>
                    <button className='btn bg-secondary text-primary'>Visit Live Site</button>
                    <button className='btn bg-secondary text-primary'>View Source Code</button>
                </div>
            </div>
            <div className='basis-1/4 min-[200px] min-w-[200px] rounded overflow-hidden'>
                <Image src={img} alt='project img' width={400} height={400} />
            </div>
        </div>
    );
};

export default ProjectCard;
