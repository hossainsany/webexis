import { Footer, Navbar } from '@/components';
import CaseStudyProvider from '@/context/CaseStudProvider';
import { Poppins } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
});

export const metadata = {
    metadataBase: new URL('https://webexis.net'),
    title: {
        default: 'WebExis - Your Affordable Website Design & Development Partner',
        template: '%s | WebExis',
    },
    keywords: [
        'webexis',
        'web design',
        'web design agency',
        'web development firm',
        'web design firms',
        'web design company',
        'affordable website design',
        'affordable website packages',
        'website design packages',
        'cheapest way to build a website',
        'web development agency',
        'web development company',
        'website creator for business',
        'best website creators',
    ],
    description:
        'Discover affordable website design and development services at Webexis. Our web design company offers tailored website design packages starting from just $499. Partner with our experienced web developers to enhance your online presence and drive business growth with custom solutions that fit your budget.',
    openGraph: {
        description:
            'Discover affordable website design and development services at Webexis. Our web design company offers tailored website design packages starting from just $499. Partner with our experienced web developers to enhance your online presence and drive business growth with custom solutions that fit your budget.',
        images: [''],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={poppins.variable}>
            <head>
                <Script
                    async
                    src='https://www.googletagmanager.com/gtag/js?id=G-3GCZVVD910'
                ></Script>
                <Script id='google-analytics'>
                    {`  window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-3GCZVVD910');`}
                </Script>
            </head>
            <body className='font-poppins bg-lightBg dark:bg-darkBg'>
                <CaseStudyProvider>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </CaseStudyProvider>
            </body>
        </html>
    );
}
