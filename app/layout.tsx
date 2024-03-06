import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/react';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/app/header';
import { Footer } from '@/app/footer';

const montserrat = Montserrat({
	weight: ['300'],
	subsets: ['latin'],
	variable: '--font-montserrat',
});

// Font files can be colocated inside of `app`
const agrandir = localFont({
	src: './Agrandir-GrandHeavy.woff2',
	display: 'swap',
	variable: '--font-agrandir',
});

export const metadata: Metadata = {
	title: 'Marin County Council of Parent Participation Nursery Schools',
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${GeistSans.variable} ${montserrat.variable} ${agrandir.variable} flex flex-col items-center font-sans`}
			>
				<Header />
				<main className='flex flex-col items-center max-w-5xl text-center'>
					{children}
				</main>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
