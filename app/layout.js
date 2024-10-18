import { Footer, Navbar } from '@/components';
import CaseStudyProvider from '@/context/CaseStudProvider';
import { Poppins } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Flag from '@/components/Flag';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
});

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Website',
    name: 'WebExis',
    image: '/logo.png',
    description:
        'Discover affordable website design and development services at Webexis. Our web design company offers tailored website design packages starting from just $499. Partner with our experienced web developers to enhance your online presence and drive business growth with custom solutions that fit your budget.',
};

export const metadata = {
    metadataBase: new URL('https://webexis.net'),
    title: {
        default: 'WebExis LLC - Your Affordable Website Design & Development Partner',
        template: '%s | WebExis LLC',
    },
    keywords: [
        'webexis',
        'webexis llc',
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
        title: 'WebExis LLC - Your Affordable Website Design & Development Partner',
        siteName: 'WebExis',
        description:
            'Discover affordable website design and development services at Webexis. Our web design company offers tailored website design packages starting from just $499. Partner with our experienced web developers to enhance your online presence and drive business growth with custom solutions that fit your budget.',
        images: [''],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={`${poppins.variable} scroll-smooth`}>
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
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className='font-poppins bg-lightBg dark:bg-darkBg'>
                <CaseStudyProvider>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <Flag />
                </CaseStudyProvider>
            </body>
        </html>
    );
}
