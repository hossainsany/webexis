import { Err } from '@components';

const NotFound = () => {
    return (
        <section className='min-h-[45vh] mx-auto flex flex-col justify-center items-center text-center bg-light-gray'>
            <Err
                title='OPPS! Page Not Found.'
                desc='Sorry, the page you are looking for does not exist.'
                errCode='404'
            />
        </section>
    );
};

export default NotFound;
