import Image from 'next/image';

const Member = ({ name, position, img, contacts }) => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-start bg-lightBg-alt dark:bg-tertiary p-5 md:p-10 rounded-xl shadow-lg'>
            <div className='flex justify-center w-full md:w-auto px-4 lg:px-0'>
                <div className='overflow-hidden rounded-lg max-w-[300px] mb-8 md:mb-0'>
                    <Image
                        src={img}
                        width={500}
                        height={500}
                        alt={`Image of ${name}, ${position} at WebExis.`}
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
            <div className=' flex flex-col justify-between items-start min-h-0 md:min-h-[300px]'>
                <div className='max-w-[300px]'>
                    <h2 className='text-2xl font-semibold '>Name: {' ' + name}</h2>
                    <h4 className='text-lg font-normal'>Position: {' ' + position}</h4>
                </div>
                <div className='pt-8 md:pt-0'>
                    <h4 className='text-xl font-semibold mb-2'>Contacts:</h4>
                    <ul>
                        {contacts?.map((contact) => (
                            <li className='mt-1' key={contact.id}>
                                <h3 className='inline-block'>{contact.title}:</h3>{' '}
                                <a href={contact.link} className='text-accent hover:underline'>
                                    {contact.desc}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Member;
