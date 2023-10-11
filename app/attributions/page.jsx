import Image from 'next/image';
import Link from 'next/link';

const infographics = [
    {
        id: 0,
        title: 'Hero Image',
        src: '/assets/laptop.svg',
        link: 'https://storyset.com/web',
        linkText: 'Web illustrations by Storyset',
    },
    {
        id: 1,
        title: 'Services Image',
        src: '/assets/web-design.jpg',
        link: 'https://storyset.com/web',
        linkText: 'Web illustrations by Storyset',
    },
    {
        id: 2,
        title: 'Services Image',
        src: '/assets/marketing.jpg',
        link: 'https://storyset.com/web',
        linkText: 'Web illustrations by Storyset',
    },
    {
        id: 3,
        title: 'Services Image',
        src: '/assets/web-development.jpg',
        link: 'https://storyset.com/web',
        linkText: 'Web illustrations by Storyset',
    },
];

const icons = [
    {
        id: 0,
        title: 'Down Arrow',
        src: '/assets/double-down.svg',
        link: 'https://fontawesome.com/icons',
        linkText: 'Icons by FontAwesome',
    },
    {
        id: 7,
        title: 'Plus Icon',
        src: '/assets/plus.svg',
        link: 'https://fontawesome.com/icons',
        linkText: 'Icons by FontAwesome',
    },
    {
        id: 5,
        title: 'Burger Menu',
        src: '/assets/burger-menu.svg',
        link: 'https://fontawesome.com/icons',
        linkText: 'Icons by FontAwesome',
    },
    {
        id: 6,
        title: 'X Icon',
        src: '/assets/x.svg',
        link: 'https://fontawesome.com/icons',
        linkText: 'Icons by FontAwesome',
    },
    {
        id: 1,
        title: 'LinkedIn',
        src: '/assets/linkedin.svg',
        link: 'https://icons8.com/',
        linkText: 'Icons by Icons8',
    },
    {
        id: 2,
        title: 'Facebook',
        src: '/assets/facebook.svg',
        link: 'https://icons8.com/',
        linkText: 'Icons by Icons8',
    },
    {
        id: 3,
        title: 'Twitter',
        src: '/assets/twitter.svg',
        link: 'https://icons8.com/',
        linkText: 'Icons by Icons8',
    },
    {
        id: 4,
        title: 'Instagram',
        src: '/assets/instagram.svg',
        link: 'https://icons8.com/',
        linkText: 'Icons by Icons8',
    },
];

const AttributionsPage = () => {
    return (
        <section className='bg-light-gray'>
            <div className='container mx-auto'>
                <h1 className='text-2xl font-semibold pb-2'>Assets Attributions</h1>
                <p className='text-lg font-medium pb-8'>Last updated October 08, 2023</p>
                <p className='pb-8'>
                    Thank you for visiting our website and exploring the various infographics and
                    icons that contribute to its visual appeal and informative content. We are
                    grateful for the creative contributions of third-party sources that have
                    enriched our online experience. Below, we extend our acknowledgment to these
                    valued partners:
                </p>
                <div className='mb-8'>
                    <h2 className='text-2xl font-semibold pb-3'>Infographics:</h2>
                    <div className='flex flex-col md:flex-row items-center justify-between flex-wrap'>
                        {infographics.map(({ id, title, src, link, linkText }) => (
                            <div
                                key={id}
                                className='w-full md:w-[24%] mb-5 bg-dark-gray rounded-md overflow-hidden'
                            >
                                <div className='relative min-h-[200px]'>
                                    <Image src={src} alt={title} fill />
                                </div>
                                <div className='p-5'>
                                    <h3 className='text-xl font-semibold pb-2'>{title}</h3>
                                    <Link href={link} className='text-accent hover:underline'>
                                        {linkText}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mb-8'>
                    <h2 className='text-2xl font-semibold pb-3'>Infographics:</h2>
                    <div className='flex flex-col md:flex-row items-center justify-between flex-wrap'>
                        {icons.map(({ id, title, src, link, linkText }) => (
                            <div
                                key={id}
                                className='w-full md:w-[24%] mb-5 bg-dark-gray rounded-md overflow-hidden px-2 lg:px-5'
                            >
                                <div className='relative min-h-[200px]'>
                                    <Image src={src} alt={title} fill />
                                </div>
                                <div className='p-2 lg:p-5'>
                                    <h3 className='text-xl font-semibold pb-2'>{title}</h3>
                                    <Link href={link} className='text-accent hover:underline'>
                                        {linkText}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <p className='pb-8'>
                        We value the collaborative spirit that has allowed us to utilize these
                        creative assets to enhance our website's aesthetics and content. Your work
                        has played a pivotal role in our digital presence, and we want to express
                        our appreciation for your valuable contributions.
                    </p>
                    <p className='pb-2'>
                        If you have any inquiries or need further information about our third-party
                        attribution for infographics and icons, please do not hesitate to contact us
                        at:
                    </p>
                    <p>
                        Email:{' '}
                        <Link
                            href='mailto:info@webexis.net'
                            className='text-accent hover:underline'
                        >
                            info@webexis.net
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AttributionsPage;
