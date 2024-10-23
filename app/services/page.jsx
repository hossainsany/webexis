import { CTA, PageHero, ServicesSection } from '@/components';
import Faq from '@/components/Faq';

export const metadata = {
    title: 'Services We Offer',
};

const data = [
    {
        id: 1,
        title: 'Web Design',
        text: 'We specialize in web design that empowers service businesses like yours. Our services include user-friendly layouts, responsive design, and stunning visuals that captivate your audience. We create designs that not only look good but also drive engagement and conversions.',
        url: '/services/web-design',
        img: '/webdesign.jpg',
        imgFirst: false,
    },
    {
        id: 2,
        title: 'Web Development',
        text: 'Our web development services ensure your site is fast, secure, and scalable. We build robust websites using the latest technologies to deliver a seamless user experience. From e-commerce platforms to content management systems, we develop solutions tailored to your business needs.',
        url: '/services/web-development',
        img: '/webdev.jpg',
        imgFirst: true,
    },
    {
        id: 3,
        title: 'Web Hosting',
        text: 'Reliable web hosting services to keep your website up and running smoothly. Our hosting plans include high uptime, fast load times, and robust security features. We provide the support and resources you need to ensure your site performs at its best.',
        url: '/services/web-hosting',
        img: '/webhosting.jpg',
        imgFirst: false,
    },
];

const page = () => {
    const headingText =
        'Explore our comprehensive web solutions. WebExis offers professional web design for visually stunning sites, web development for robust and dynamic functionalities, and reliable web hosting to ensure your site is always accessible online.';
    const headingTextShort =
        'Explore our comprehensive web solutions. From web design, development to web hosting.';
    const headingImg = '/services-hero.png';

    return (
        <>
            <PageHero
                headingTitle={'WebExis Services'}
                headingSubtitle={'Our Expertise'}
                headingText={headingText}
                headingImg={headingImg}
                headingTextShort={headingTextShort}
            />
            {data.map((d, i) => (
                <ServicesSection
                    key={d.id}
                    title={d.title}
                    text={d.text}
                    url={d.url}
                    imgFirst={d.imgFirst}
                    img={d.img}
                    bgAlt={i === 1}
                />
            ))}
            <Faq />
            <CTA bgAlt={false} />
        </>
    );
};

export default page;
