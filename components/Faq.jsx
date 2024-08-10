import Image from 'next/image';
import FaqAccordion from './FaqAccordion';

const faqs = [
    {
        id: 1,
        question: 'What is included in your web design services?',
        answer: 'Our web design services include creating user-friendly layouts, responsive design, and stunning visuals. We also focus on ensuring that the design aligns with your brand and enhances user engagement.',
    },
    {
        id: 2,
        question: 'How long does it take to develop a website?',
        answer: "The timeline for web development depends on the project's complexity and scope. Typically, it can take from a few weeks to a few months. We provide a detailed timeline after assessing your specific requirements.",
    },
    {
        id: 3,
        question: 'What kind of websites can you develop?',
        answer: 'We develop a wide range of websites, including e-commerce platforms, content management systems, business websites, and custom web applications. Our solutions are tailored to meet your unique business needs.',
    },
    {
        id: 4,
        question: 'What are the benefits of using your web hosting services?',
        answer: 'Our web hosting services offer high uptime, fast load times, robust security features, and dedicated support. With our hosting, you receive free maintenance and basic website edits like replacing text or images.',
    },
    {
        id: 5,
        question: 'Can I update my website content on my own?',
        answer: 'Yes, we develop websites with user-friendly content management systems (CMS) like WordPress and Sanity that allow you to easily update and manage your website content without needing technical expertise.',
    },
    {
        id: 6,
        question: 'What if I already have a website and need a redesign?',
        answer: 'We can help with that too! Our team will assess your current website, understand your goals, and provide a comprehensive redesign plan to improve both aesthetics and functionality.',
    },
];

const Faq = () => {
    return (
        <section className='bg-lightBg-alt dark:bg-darkBg-alt text-secondary dark:text-primary py-24'>
            <div className='container mx-auto'>
                <div className='mb-24 text-center'>
                    <h2 className='text-3xl font-bold '>FAQ</h2>
                    <p>Answers to Common Inquiries</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between shrink-0 gap-5 flex-1'>
                    <div className='mx-auto w-[350px] md:h-[500px] md:w-[400px] rounded-xl overflow-hidden group'>
                        <Image
                            src={'/faq.jpg'}
                            alt=''
                            width={400}
                            height={400}
                            className='w-full h-full object-cover group-hover:scale-[105%] transition-all ease-in-out duration-500'
                        />
                    </div>
                    <div className='w-full md:w-[60%]'>
                        {faqs.map((faq, i) => (
                            <FaqAccordion
                                key={faq.id}
                                question={faq.question}
                                answer={faq.answer}
                                i={i}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
