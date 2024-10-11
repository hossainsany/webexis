import Image from 'next/image';
import React from 'react';
import { Button } from '.';

const MemberCard = ({ name, position, url, img }) => {
    return (
        <div className='p-4 rounded-lg bg-lightBg-alt dark:bg-tertiary min-h-[450px] w-[300px] shadow-md '>
            <div className='img w-full h-[250px] rounded-md overflow-hidden mb-6'>
                <Image
                    src={img}
                    width={300}
                    height={300}
                    alt={`${name} Webexis ${position}'s image`}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='min-h-[150px] flex flex-col justify-between'>
                <h2 className='text-xl font-medium leading-[22px] pb-4'>Name: {name}</h2>
                <p className='text-base font-normal leading-5 pb-4'>Position: {position}</p>
                <Button link={`member/${url}`}>View More Details</Button>
            </div>
        </div>
    );
};

export default MemberCard;
