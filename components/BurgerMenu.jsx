'use client';

import { BurgerIcon, XIcon } from '@/assets/svg';

const BurgerMenu = ({ clicked, onSetClicked }) => {
    const handleClick = () => {
        onSetClicked((c) => !c);
    };

    return (
        <div onClick={handleClick} className='cursor-pointer md:hidden'>
            {clicked ? (
                <XIcon className='w-[25px] h-[25px] fill-secondary' />
            ) : (
                <BurgerIcon className='w-[30px] h-[30px] fill-secondary' />
            )}
        </div>
    );
};

export default BurgerMenu;
