'use client';

import { notFound, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { servicePages } from '@constants';
import { ServiceBlog } from '@components';

const Service = () => {
    const [blogs, setBlogs] = useState([]);

    const pathName = usePathname();

    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');

    useEffect(() => {
        const handleTitle = () => {
            let found = false;

            servicePages.map((blog) => {
                if (pathName === blog.link) {
                    setTitle(blog.pageTitle);
                    setImg(blog.headerImg);
                    setBlogs([blog]);
                    found = true;
                }
            });

            if (!found) {
                notFound();
            }
        };

        handleTitle();
    }, []);

    return (
        <div className=''>
            <div className='w-full min-h-[30vh]  relative before:absolute before:top-0 before:left-0 bg-black drop-shadow-none '>
                <Image
                    src={img}
                    alt='generic background images for services we offer'
                    className='object-cover  drop-shadow-none'
                    fill
                />
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>

                <h1 className='absolute top-[50%] left-[50%] text-5xl text-center  md:text-6xl font-semibold translate-y-[-50%] translate-x-[-50%]'>
                    {title}
                </h1>
            </div>
            <div className='py-[100px] bg-light-gray px-5 lg:px-0'>
                <div className='container mx-auto'>
                    <ServiceBlog blogs={blogs} />
                </div>
            </div>
        </div>
    );
};

export default Service;
