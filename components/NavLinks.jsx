import Link from 'next/link';

const NavLinks = ({ burgerToggle, setBurgerToggle }) => {
    const handleClick = () => {
        if (burgerToggle) {
            setBurgerToggle((prev) => !prev);
        }
    };

    return (
        <ul
            className={` flex flex-col xl:flex-row absolute bottom-[-302px] left-0 w-full px-5 py-2 z-[2] bg-dark-gray border-y-[1px] border-accent/[0.3] lg:pr-0 lg:border-0 lg:flex-row lg:relative lg:top-0 lg:left-0 lg:justify-end lg:flex ${
                !burgerToggle ? 'hidden' : ''
            }`}
        >
            <li>
                <Link
                    href='/'
                    onClick={handleClick}
                    className='text-white hover:text-accent transition-all pr-10 mb-7 inline-block lg:mb-0'
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    href='/'
                    onClick={handleClick}
                    className='text-white hover:text-accent transition-all pr-10 mb-7 inline-block lg:mb-0'
                >
                    About Us
                </Link>
            </li>
            <li>
                <Link
                    href='/'
                    onClick={handleClick}
                    className='text-white hover:text-accent transition-all pr-10 mb-7 inline-block lg:mb-0'
                >
                    Services
                </Link>
            </li>
            <li>
                <Link
                    href='/'
                    onClick={handleClick}
                    className='text-white hover:text-accent transition-all pr-10 mb-7 inline-block lg:mb-0'
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    href='/'
                    onClick={handleClick}
                    className='text-white hover:text-accent transition-all pr-10 mb-7 inline-block lg:mb-0'
                >
                    FAQs
                </Link>
            </li>
            <li>
                <Link
                    href='/'
                    onClick={handleClick}
                    className='text-white hover:text-accent transition-all mb-7'
                >
                    Contact Us
                </Link>
            </li>
        </ul>
    );
};

export default NavLinks;
