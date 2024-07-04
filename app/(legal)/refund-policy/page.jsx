import Link from 'next/link';

const ReturnPolicy = () => {
    return (
        <section className='bg-lightBg dark:bg-darkBg text-secondary dark:text-primary py-24 '>
            <div className='container mx-auto'>
                <h1 className='text-2xl font-semibold pb-2'>REFUND POLICY</h1>
                <p className='text-lg font-medium pb-8'>Last updated October 08, 2023</p>
                <p className='pb-8'>
                    Thank you for your purchase. We hope you are happy with your purchase. However,
                    if you are not completely satisfied with your purchase for any reason, you may
                    ask for a full refund. Please see below for more information on our refund
                    policy.
                </p>
                <div className='mb-8'>
                    <h2 className='text-xl font-semibold pb-3'>RETURNS</h2>
                    <p className='pb-3'>
                        Due to the nature of our digital services, we do not offer returns or
                        refunds once the service has been initiated or delivered. We encourage you
                        to carefully review our offerings and contact us if you have any questions
                        or concerns before making a purchase.
                    </p>
                </div>
                <div className='mb-10'>
                    <h2 className='text-xl font-semibold pb-3'>CANCELLATION</h2>
                    <p className='pb-3'>
                        If you wish to cancel a service or subscription before it has been
                        initiated, please contact our customer service at info@webexis.net as soon
                        as possible. Depending on the specific circumstances, we may be able to
                        issue a refund or provide credit for future services.
                    </p>
                </div>

                <div className='mb-10'>
                    <h2 className='text-xl font-semibold pb-3'>EXCEPTIONS</h2>
                    <p className='pb-3'>
                        While we do not generally offer returns for digital services, we are
                        committed to customer satisfaction. If you encounter any issues or are
                        dissatisfied with our service, please contact us, and we will work with you
                        to address your concerns and find a suitable solution.
                    </p>
                </div>

                <div>
                    <h2 className='text-xl font-semibold pb-3'>QUESTIONS</h2>
                    <p className='pb-3'>
                        If you have any questions or need further clarification about our return
                        policy for digital services, please do not hesitate to contact us at:
                    </p>
                    <p className='pb-3'>
                        Email:{' '}
                        <Link
                            href='mailto:info@webexis.net'
                            className='text-accent hover:underline'
                        >
                            info@webexis.net
                        </Link>
                        .
                    </p>
                    <p className='pb-3'>
                        We appreciate your trust in our web development and digital marketing
                        services, and we are here to assist you with any inquiries or concerns you
                        may have.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ReturnPolicy;
