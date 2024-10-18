const Filter = ({ industry, setIndustry, techStack, setTechStack, handleFilter }) => {
    return (
        <section className='relative bg-light-tertiary dark:bg-tertiary lg:bg-transparent '>
            <div className='h-[60px] hidden lg:block bg-lightBg dark:bg-darkBg'></div>
            <div className='h-[60px] hidden lg:block bg-lightBg-alt dark:bg-darkBg-alt'></div>

            <div className='container mx-auto px-4 xl:px-0 py-4 bg-light-tertiary dark:bg-tertiary text-secondary dark:text-primary lg:shadow-md lg:bg-transparent	lg:absolute top-0 lg:top-[50%] left-0 lg:left-[50%] translate-x-0 lg:translate-x-[-50%] tanslate-y-0 lg:translate-y-[-50%] lg:rounded-lg lg:py-12'>
                <form
                    className='w-full flex flex-col lg:flex-row lg:items-center lg:justify-center'
                    onSubmit={(e) => handleFilter(e)}
                >
                    <h2 className='text-xl font-semibold text-center mb-4 lg:hidden'>Filter</h2>
                    <div className='flex justify-between items-center lg:mr-8'>
                        <h3 className='text-lg font-medium mr-4'>Industry</h3>
                        <select
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            className=' bg-light-tertiary dark:bg-tertiary w-[200px] border-2 border-accent/45 rounded px-4 py-1 lg:py-2'
                        >
                            <option value='all'>All</option>
                            <option value='roofing'>Roofing</option>
                            <option value='restaurant'>Restaurant</option>
                            <option value='education'>Education</option>
                            <option value='tech'>Tech</option>
                        </select>
                    </div>
                    <div className='flex justify-between items-center mt-4 lg:mt-0 lg:mr-4'>
                        <h3 className='text-lg font-medium mr-4'>Tech Stack</h3>
                        <select
                            value={techStack}
                            onChange={(e) => setTechStack(e.target.value)}
                            className=' bg-light-tertiary dark:bg-tertiary w-[200px] border-2 border-accent/45 rounded px-4 py-1 lg:py-2 '
                        >
                            <option value='all'>All</option>
                            <option value='wordpress'>WordPress</option>
                            <option value='custom'>Custom Website</option>
                        </select>
                    </div>
                    <button className='btn border-2 border-secondary dark:border-accent hover:border-accent bg-secondary dark:bg-tertiary text-primary py-1 lg:py-2 lg:px-12 mt-4 lg:mt-0 '>
                        Apply
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Filter;
