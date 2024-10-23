import { Hero, Services, CTA, Portfolio, USP, Testimonials, Contact } from '@/components';

export default function Home() {
    return (
        <>
            <Hero />
            <USP />
            <Services />
            <Portfolio />
            <Testimonials />
            <CTA bgAlt={true} />
            <Contact />
        </>
    );
}
