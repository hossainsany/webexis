'use client';

import { BurgerIcon, XIcon } from '@/assets/svg';

const BurgerMenu = ({ clicked, onSetClicked }) => {
    const handleClick = () => {
        onSetClicked((c) => !c);
    };

    return (
        <div onClick={handleClick} className='cursor-pointer min-w-[30px] md:hidden'>
            {clicked ? (
                <XIcon className='w-[25px] h-[25px] fill-secondary dark:fill-primary' />
            ) : (
                <BurgerIcon className='w-[30px] h-[30px] fill-secondary dark:fill-primary' />
            )}
        </div>
    );
};

export default BurgerMenu;
