'use client';

import { Member } from '@/components';
import { members } from '@/data';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const MemberPage = ({ params }) => {
    const slug = params.name;
    const [currentMember, setCurrentMember] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setCurrentMember(members.find((member) => (member.slug === slug ? member : '')));
    }, [slug]);

    useEffect(() => {
        setIsLoading(currentMember.length < 1 ? true : false);
    }, [currentMember]);

    return (
        <>
            {isLoading && (
                <section className='min-h-[60vh] flex justify-center items-center'>
                    <div className=''>
                        <div>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 512 512'
                                className='animate-spin-slow fill-secondary dark:fill-primary'
                            >
                                <path d='M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z' />
                            </svg>
                        </div>
                        <h1 className='text-center text-secondary dark:text-primary text-lg pt-6 animate-pulse'>
                            Loading...
                        </h1>
                    </div>
                </section>
            )}
            {currentMember && !isLoading && (
                <section className='bg-lightBg dark:bg-darkBg text-secondary dark:text-primary py-12 md:py-24'>
                    <div className='container mx-auto px-4'>
                        <Member
                            name={currentMember.name}
                            position={currentMember.position}
                            id={currentMember.id}
                            img={currentMember.img}
                            contacts={currentMember.contacts}
                        />
                    </div>
                </section>
            )}
        </>
    );
};

export default MemberPage;
