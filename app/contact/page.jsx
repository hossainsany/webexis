import { ContactDetails, ContactForm, PageHero } from '@/components';

export const metadata = {
    title: 'Contact Us',
};

const page = () => {
    const headingText =
        'Ready to elevate your online presence? Contact WebExis today to discuss your web design or development needs. Whether you need a stunning website or a custom web solution, our team is here to help you succeed.';
    const headingTextShort =
        'Ready to elevate your online presence? Contact WebExis today to discuss your web design or development needs.';
    const headingImg = '/contact.png';

    return (
        <>
            <PageHero
                headingImg={headingImg}
                headingTitle='Contact Us'
                headingSubtitle='Boost Your Online Presence'
                headingText={headingText}
                headingTextShort={headingTextShort}
                bgAlt={true}
                imgHFull={true}
            />
            <section className='py-24 dark:bg-darkBg'>
                <div className='container mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-center'>
                    <ContactDetails />
                    <ContactForm itemsEnd={true} />
                </div>
            </section>
        </>
    );
};

export default page;
