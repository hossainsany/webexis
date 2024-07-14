const CaseStudyText = ({ title, description, list }) => {
    return (
        <>
            <div className={list ? 'mb-4' : 'mb-12'}>
                {list ? (
                    list.map((l) => (
                        <ul key={l.id}>
                            <li className='flex flex-wrap mb-4'>
                                <p className=''>
                                    {' '}
                                    <span className='h-[10px] w-[10px] bg-accent rounded-full inline-block mr-2 mb-[2px]'></span>
                                    <span className='text-lg font-semibold'>{l.name}:</span>{' '}
                                    {l.description}
                                </p>
                            </li>
                        </ul>
                    ))
                ) : (
                    <>
                        <h2 className='text-lg font-semibold pb-4'>{title}</h2>
                        <p>{description}</p>
                    </>
                )}
            </div>
        </>
    );
};

export default CaseStudyText;
