'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Text({ small, children }: any) {
	return (
		<>
			<span className='md:hidden'>{small}</span>
			<span className='hidden md:inline'>{children}</span>
		</>
	);
}

export function TableOfContents() {
	return (
		<div className='w-screen bg-convention-golden flex justify-center py-4'>
			<ol className='grid grid-cols-2 md:flex md:flex-wrap justify-center gap-6 font-black'>
				<TocLi href='/convention-2024'>Welcome</TocLi>
				<TocLi href='/convention-2024/keynotes'>Keynotes</TocLi>
				<TocLi href='/convention-2024/workshops'>
					<Text small='Workshops'>Workshop Descriptions</Text>
				</TocLi>
				<TocLi href='/convention-2024/speakers'>
					<Text small='Speakers'>Meet Our Speakers</Text>
				</TocLi>
			</ol>
		</div>
	);
}

function TocLi({ children, href }: any) {
	const pathname = usePathname();
	const active = pathname === href;
	const bgColor = active
		? 'bg-convention-sunset text-convention-peachcream'
		: 'bg-convention-peachcream text-slate-800 hover:bg-convention-sunbeam';
	return (
		<li
			className={`font-bold font-montserrat rounded-md shadow-md relative ${bgColor} transition-all`}
		>
			<Link href={href} className='w-full h-full'>
				<div className='p-2'>{children}</div>
			</Link>
		</li>
	);
}
