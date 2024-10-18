import Image from 'next/image';
import FaqAccordion from './FaqAccordion';

const faqs = [
    {
        id: 1,
        question: 'What is included in your affordable website design services?',
        answer: 'Our affordable website design services include user-friendly layouts, responsive designs, and stunning visuals. We focus on aligning your design with your brand to enhance user engagement. Explore our website design packages starting from only $499 for a 3-page site using premade templates.',
    },
    {
        id: 2,
        question: 'How long does it take to build a website?',
        answer: "The timeline for building a website depends on the project's complexity and scope. Typically, it takes from a few weeks to a few months. After assessing your specific needs, our web development firm will provide a detailed timeline.",
    },
    {
        id: 3,
        question: 'What kind of websites can you develop?',
        answer: 'We develop a wide range of websites, including e-commerce platforms, content management systems, business websites, and custom web applications. Our solutions are tailored to meet your unique business needs.',
    },
    {
        id: 4,
        question: 'What are your website design package prices?',
        answer: 'Our website design packages start from only $499 for a 3-page site built with premade templates on WordPress, Webflow, or Framer. For custom websites, please provide details using our contact form to receive a free quote tailored to your needs.',
    },
    {
        id: 5,
        question: 'What is included in the $499 website design package?',
        answer: 'Our $499 package includes a 3-page site designed using premade templates on WordPress, Webflow, or Framer. This package ensures a professional look while keeping costs low. Additional pages and custom features can be added for an extra fee.',
    },
    {
        id: 6,
        question: 'Can you help me build a custom website?',
        answer: 'Absolutely! We specialize in creating custom websites tailored to your specific requirements. To get started, please provide the details of your project using our contact form, and we’ll send you a free quote based on your needs.',
    },
];

const Faq = () => {
    return (
        <section className='bg-lightBg-alt dark:bg-darkBg-alt text-secondary dark:text-primary py-24'>
            <div className='container mx-auto px-4 xl:px-0'>
                <div className='mb-24 text-center'>
                    <h2 className='text-3xl font-bold '>FAQ</h2>
                    <p>Answers to Common Inquiries</p>
                </div>
                <div className='flex flex-col lg:flex-row justify-between shrink-0 gap-5 flex-1'>
                    <div className='flex justify-center items-start'>
                        <div className='w-[350px] md:h-[500px] md:w-[400px] rounded-xl overflow-hidden group'>
                            <Image
                                src={'/faq.jpg'}
                                alt=''
                                width={400}
                                height={400}
                                className='w-full h-full object-cover group-hover:scale-[105%] transition-all ease-in-out duration-500'
                            />
                        </div>
                    </div>

                    <div className='w-full lg:w-[60%] md:mt-8 lg:mt-0'>
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
