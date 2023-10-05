import '@styles/global.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';

export const metadata = {
    title: 'Webexis - Your Gateway to Online Success',
    description:
        "At Webexis, we're passionate about transforming businesses into digital powerhouses. In today's hyper-connected world, having a robust online presence is more critical than ever. Our mission is to help you unlock your business's full online potential.",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <link rel='icon' href='/assets/webexis-favicon.png' sizes='any' />
            </head>
            <body>
                <Nav />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
