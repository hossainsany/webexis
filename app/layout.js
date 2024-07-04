import { Footer, Navbar } from '@/components';
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
        default: 'WebExis - Your Web Design, Development, and Marketing Partner',
        template: '%s | WebExis',
    },
    keywords: [
        'webexis',
        'web design',
        'Website development',
        'digital marketing agency',
        'Custom web solutions',
        'best web design agency',
        'best web design agency in sylhet',
        'SEO (Search Engine Optimization)',
        'Social media marketing',
        'Affordable web design services for small businesses',
        'Custom website development solutions for startups',
        'Local SEO services for regional businesses',
        'Social media marketing campaigns for increased engagement',
    ],
    description:
        'Elevate your online presence with WebExis. We specialize in custom web design, web development, and digital marketing strategies. Our expert team creates stunning, user-friendly websites to attract clients, streamline lead generation, and propel your business forward.',
    openGraph: {
        description:
            'Elevate your online presence with WebExis. We specialize in custom web design, web development, and digital marketing strategies. Our expert team creates stunning, user-friendly websites to attract clients, streamline lead generation, and propel your business forward.',
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
            <body className='font-poppins selection:bg-accent'>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
