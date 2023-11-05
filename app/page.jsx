import { Hero, About, Faq, Contact, Services, Projects, Cta, ToTop } from '@components';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            {/* <Projects /> */}
            <Cta /> {/* palceholder for projects */}
            <Faq />
            <Contact />
            <ToTop />
        </>
    );
};

export default Home;
