import { Footer, Navbar } from '@/components';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
});

export const metadata = {
    title: 'Webexis - Grow Your Service Business with Powerful Web Design',
    description:
        'Attract more clients, showcase your expertise, and simplify lead capture with Webexis. We design beautiful, user-friendly websites for service businesses to boost online presence, generate leads, and grow your business.',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={poppins.variable}>
            <body className='font-poppins selection:bg-accent'>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
