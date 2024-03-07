'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Text({
	small,
	children,
}: {
	children: React.ReactNode;
	small: string;
}) {
	return (
		<>
			<span className='md:hidden'>{small}</span>
			<span className='hidden md:inline'>{children}</span>
		</>
	);
}

export function TableOfContents() {
	return (
		<div className='w-screen bg-convention-golden flex justify-center pb-7 shadow-md relative'>
			<ol className='grid grid-cols-2 sm:grid-cols-3 justify-center gap-6 font-black max-w-screen-sm'>
				<TocLi href='/convention-2024'>Welcome</TocLi>
				<TocLi href='/convention-2024/keynotes/friday'>Keynotes</TocLi>
				<TocLi href='/convention-2024/workshops'>
					<Text small='Workshops'>Workshops</Text>
				</TocLi>
				<TocLi href='/convention-2024/speakers'>
					<Text small='Speakers'>Speakers</Text>
				</TocLi>
				<TocLi href='/convention-2024/venue'>Venue</TocLi>
				<TocLi href='/convention-2024/vendors'>Vendors</TocLi>
			</ol>
		</div>
	);
}

export function TocLi({
	children,
	href,
	parts = 3,
}: {
	children: React.ReactNode;
	href: string;
	parts?: number;
}) {
	const pathname = usePathname().split('/').slice(0, parts).join('/');
	const active = pathname === href.split('/').slice(0, parts).join('/');
	const bgColor = active
		? 'bg-convention-sunset text-convention-peachcream border-convention-peachcream'
		: 'bg-convention-peachcream text-slate-800 hover:bg-convention-sunbeam border-grey-200';
	return (
		<li
			className={`border font-bold font-montserrat rounded-md shadow-md relative ${bgColor} transition-all`}
		>
			<Link href={href} className='w-full h-full'>
				<div className='p-2'>{children}</div>
			</Link>
		</li>
	);
}
