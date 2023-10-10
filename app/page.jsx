import { Hero, About, Faq, Contact, Services, Projects, Cta } from '@components';

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
        </>
    );
};

export default Home;
