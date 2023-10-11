'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Service = () => {
    const pathName = usePathname();
    const [path, setPath] = useState('');

    console.log(path);

    useEffect(() => {
        const capitalizePath = () => {
            setPath(pathName.slice(10, 11).toUpperCase() + pathName.slice(11));
        };

        capitalizePath();
    }, [pathName]);

    return (
        <section className='bg-light-gray min-h-[45vh] flex justify-center items-center text-center'>
            <div className='container mx-auto'>
                <h1 className='text-2xl font-semibold'>{path} Page in currently unavailable.</h1>
                <p className='pt-2'>This website is still under development.</p>
            </div>
        </section>
    );
};

export default Service;
