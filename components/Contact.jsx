import Image from 'next/image';
import { ContactForm } from '.';

const Contact = () => {
    return (
        <section className='py-24 bg-lightBg dark:bg-darkBg'>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4 xl:px-0'>
                <div className='flex-1 flex justify-center items-center mb-0 md:mb-[-96px] my-[-96px]'>
                    <Image
                        src={'/contact.png'}
                        alt='picture of contact'
                        className='block'
                        width={600}
                        height={500}
                    />
                </div>
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
