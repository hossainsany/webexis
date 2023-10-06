import About from '@components/About';
import Hero from '@components/Hero';
import { redirect } from 'next/navigation';

const Home = () => {
    redirect('/coming-soon');

    return (
        <>
            <Hero />
            <About />
        </>
    );
};

export default Home;
