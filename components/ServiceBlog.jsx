import Image from 'next/image';
import ContactForm from './ContactForm';

const ServiceBlog = ({ blogs }) => {
    return (
        <div className=''>
            {blogs &&
                blogs.map((blog) => (
                    <>
                        <div key={blog.id}>
                            <h1 className='text-3xl font-semibold pb-4'>{blog.blogTitle}</h1>
                            <p className='text-base pb-12 lg:w-[80%]'>{blog.intro}</p>
                            <div className='flex'>
                                <div className='lg:pr-8'>
                                    {blog.subtitles.map((item) => (
                                        <div className='pb-10' key={item.id}>
                                            <h3 className='text-lg font-semibold pb-3'>
                                                {item.subtitle}
                                            </h3>
                                            {item.paragraphs.map((p, index) => (
                                                <p key={index} className='pb-4 last:pb-0'>
                                                    {p}
                                                </p>
                                            ))}
                                        </div>
                                    ))}
                                </div>

                                <div className='h-[550px] 2xl:h-auto w-[60%] lg:w-[60%] relative rounded-md overflow-hidden hidden lg:block'>
                                    <Image
                                        src={blog.articleImg}
                                        className='oject-cover opacity-70'
                                        fill
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-[500px] mx-auto mt-20'>
                            <h2 className='text-2xl font-semibold text-center pb-5'>
                                Get A Quote:
                            </h2>
                            <ContactForm />
                        </div>
                    </>
                ))}
        </div>
    );
};

export default ServiceBlog;
