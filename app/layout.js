import '@styles/global.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';

export const metadata = {
    applicationName: 'WebExis',
    title: 'Webexis - Your Gateway to Online Success',
    description:
        "At Webexis, we're passionate about transforming businesses into digital powerhouses. In today's hyper-connected world, having a robust online presence is more critical than ever. Our mission is to help you unlock your business's full online potential.",
    keywords: [
        'webexis',
        'web design agency',
        'web development agency',
        'marketing agency',
        'digital marketing agency',
        'web design',
        'web development',
        'marketing',
        'digital marketing',
    ],
    metadataBase: new URL('https://webexis.net'),
    openGraph: {
        title: 'Webexis - Your Gateway to Online Success',
        description:
            "At Webexis, we're passionate about transforming businesses into digital powerhouses. In today's hyper-connected world, having a robust online presence is more critical than ever. Our mission is to help you unlock your business's full online potential.",
        url: 'https://webexis.net',
        siteName: 'WebExis',
        images: '/assets/webexis-logo.png',
    },
    authors: [{ name: 'Hossain Sany', url: 'https://hossainsany.com' }],
    icons: {
        icon: '/assets/webexis-favicon.png',
        apple: '/assets/favicon-apple.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className='!scroll-smooth'>
            <body>
                <Nav />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
