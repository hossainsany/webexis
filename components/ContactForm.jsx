import { useRouter } from 'next/navigation';

const ContactForm = () => {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        fetch('https://getform.io/f/3d91164b-c3ce-4a43-b0d9-cc09b21b048e', {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        })
            .then((res) => {
                console.log(res);
                router.push('/forms/form-success');
            })
            .catch((err) => {
                console.log(err);
                router.push("'/forms/400'");
            });
    };
    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col flex-[100%] w-full md:flex-[35%] lg:flex-[25%] justify-end items-center md:items-end'
        >
            <input
                type='text'
                placeholder='Your Name'
                name='name'
                className='px-6 py-3 mb-3 rounded-md bg-dark-gray/[75%] text-dark-white w-full '
                required
            />
            <input
                type='email'
                placeholder='Your Email'
                name='email'
                className='px-6 py-3 mb-3 rounded-md bg-dark-gray/[75%] text-dark-white w-full '
                required
            />
            <textarea
                name='message'
                placeholder='Your Message'
                rows='8'
                className='px-6 py-3 mb-3 rounded-md bg-dark-gray/[75%] text-dark-white w-full '
                required
            ></textarea>
            <button type='submit' className='btn rounded-md w-full '>
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
