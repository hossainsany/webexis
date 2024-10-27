export const metadata = {
    title: 'Our Portfolio',

    keywords: [
        'webexis',
        'webexis llc',
        'webexis portfolio',
        'web design',
        'web development',
        'web hosting',
        'web design agency',
        'web development firm',
        'web design firms',
        'web design company',
        'affordable website design',
    ],
    description:
        'Explore Webexis portfolio! Discover how our affordable, custom web solutions help businesses grow online with tailored website designs.',
    openGraph: {
        title: 'Contact Us',
        siteName: 'WebExis',
        description:
            'Explore Webexis portfolio! Discover how our affordable, custom web solutions help businesses grow online with tailored website designs.',
        images: [''],
        type: 'website',
        url: 'https://webexis.net/case-studies',
    },
};

export default function RootLayout({ children }) {
    return <>{children}</>;
}
