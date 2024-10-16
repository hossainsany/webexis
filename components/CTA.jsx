import { Button } from '.';

const CTA = ({ bgAlt }) => {
    const bgStyle = bgAlt
        ? 'before:dark:bg-darkBg before:bg-lightBg'
        : 'before:dark:bg-darkBg-alt before:bg-lightBg-alt';

    return (
        <section
            className={`relative py-16 lg:py-24 bg-lightBg dark:bg-darkBg text-secondary dark:text-primary before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[""] before:z-[-1] ${bgStyle}`}
            style={{ background: 'url("/cta-bg.png")', backgroundSize: 'cover' }}
        >
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4 xl:px-0 text-start '>
                <div className='md:max-w-[70%] mb-6 md:mb-0'>
                    <h2 className='text-[22px] leading-7 font-medium lg:text-2xl md:font-semibold pb-4 md:pb-2 '>
                        Unlock Your Business Potential with a Free Quote!
                    </h2>
                    <p>
                        Discover how Webexis can enhance your online presence with affordable
                        website design. Attract more clients and accelerate your business growth
                        without breaking the bank. Contact us today for your free quote and take the
                        first step towards an effective, budget-friendly digital solution!
                    </p>
                </div>

                <Button link='/contact'>Get a Free Quote</Button>
            </div>
        </section>
    );
};

export default CTA;
