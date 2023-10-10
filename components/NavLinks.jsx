import { navLinks } from '@constants';
import Link from 'next/link';

const NavLinks = ({ burgerToggle, setBurgerToggle }) => {
    const handleClick = () => {
        if (burgerToggle) {
            setBurgerToggle((prev) => !prev);
        }
    };

    return (
        <ul
            className={` flex flex-col xl:flex-row absolute bottom-[-274px] left-0 w-full px-5 py-5 z-[2] bg-dark-gray border-y-[1px] border-accent/[0.3] lg:pr-0 lg:border-0 lg:flex-row lg:relative lg:top-0 lg:left-0 lg:justify-end lg:flex .transition-300 ${
                !burgerToggle ? 'hidden' : ''
            }`}
        >
            {navLinks.map(({ id, link, text }) => (
                <li key={id} className='pr-10 mb-7 lg:mb-0 last:mb-0 last:pr-0'>
                    <Link
                        href={link}
                        onClick={handleClick}
                        className='text-white hover:text-accent transition-all  inline-block '
                    >
                        {text}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
