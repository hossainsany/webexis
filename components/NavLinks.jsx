import Link from 'next/link';

const NavLinks = ({ burgerToggle }) => {
    return (
        <ul
            className={` flex flex-col xl:flex-row absolute bottom-[-284px] left-0 w-full p-5 z-[2] bg-dark-gray lg:flex-row lg:relative lg:top-0 lg:left-0 lg:justify-end lg:flex ${
                !burgerToggle ? 'hidden' : ''
            }`}
        >
            <li>
                <Link
                    href='/'
                    className='text-white hover:text-accent transition-all pr-10 mb-5 inline-block lg:mb-0'
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    href='/'
                    className='text-white hover:text-accent transition-all pr-10 mb-5 inline-block lg:mb-0'
                >
                    About Us
                </Link>
            </li>
            <li>
                <Link
                    href='/'
                    className='text-white hover:text-accent transition-all pr-10 mb-5 inline-block lg:mb-0'
                >
                    Services
                </Link>
            </li>
            <li>
                <Link
                    href='/'
                    className='text-white hover:text-accent transition-all pr-10 mb-5 inline-block lg:mb-0'
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    href='/'
                    className='text-white hover:text-accent transition-all pr-10 mb-5 inline-block lg:mb-0'
                >
                    FAQs
                </Link>
            </li>
            <li>
                <Link href='/' className='text-white hover:text-accent transition-all mb-5'>
                    Contact Us
                </Link>
            </li>
        </ul>
    );
};

export default NavLinks;
