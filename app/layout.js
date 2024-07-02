import { Footer, Navbar } from '@/components';
import './globals.css';

export const metadata = {
    title: 'Webexis - Grow Your Service Business with Powerful Web Design',
    description:
        'Attract more clients, showcase your expertise, and simplify lead capture with Webexis. We design beautiful, user-friendly websites for service businesses to boost online presence, generate leads, and grow your business.',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
