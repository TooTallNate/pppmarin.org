import Image from 'next/image';
import { Heading } from '@/app/components/heading';

import playisenough from '@/public/playisenough.png';
import Link from 'next/link';

export default function Convention2024() {
	return (
		<>
			<div className='flex flex-col items-center bg-convention-golden pt-8 w-screen relative'>
				<div className='absolute top-0 left-0 h-[48%] sm:h-[55%] lg:h-1/2 w-full bg-convention-sunset' />
				<Image
					priority
					src={playisenough}
					alt='Play is Enough'
					width={300}
					className='w-52 md:w-72 lg:w-80 relative'
				/>
				<Heading className='pt-2 md:pt-3 lg:pt-4 pb-2 md:pb-3 lg:pb-4 font-agrandir uppercase relative'>
					<span className='text-convention-sunset'>Convention</span>{' '}
					<span className='text-convention-peachcream'>2024</span>
				</Heading>
			</div>
			<TableOfContents />
			<Welcome />
		</>
	);
}

function Text({ small, children }: any) {
	return (
		<>
			<span className='md:hidden'>{small}</span>
			<span className='hidden md:inline'>{children}</span>
		</>
	);
}

function TableOfContents() {
	return (
		<div className='w-screen bg-convention-golden flex justify-center py-4'>
			<ol className='flex list-decimal gap-9 font-black'>
				<TocLi>
					<Link href='/convention-2024/keynotes'>Keynotes</Link>
				</TocLi>
				<TocLi>
					<Text small='Workshops'>Workshop Descriptions</Text>
				</TocLi>
				<TocLi>
					<Text small='Speakers'>Meet Our Speakers</Text>
				</TocLi>
			</ol>
		</div>
	);
}

function TocLi({ children }: any) {
	return (
		<li className='font-bold font-montserrat text-slate-800 rounded-md shadow-md bg-convention-sunset'>
			{children}
		</li>
	);
}

function Welcome() {
	return (
		<section className='w-screen bg-convention-sunflower p-8 md:p-12 pt-16 flex flex-col items-center'>
			<h3 className='uppercase font-agrandir text-convention-sunset text-4xl py-3'>
				Welcome
			</h3>
			<div className='max-w-screen-sm bg-convention-peachcream p-6 flex flex-col items-center gap-4 font-montserrat shadow-lg'>
				<p className='max-w-screen-sm'>
					Welcome to{' '}
					<span className='italic font-extrabold'>Play is Enough</span>, the
					California Council for Parent Participation Nursery School’s 75th
					annual Convention in San Rafael, CA!
				</p>
				<p className='max-w-screen-sm'>
					We are eagerly looking forward to an event brimming with wonder,
					exploration, and discovery, shared alongside like-minded parents and
					educators. We hope it is an enjoyable and fulfilling experience for
					every attendee.
				</p>
			</div>
		</section>
	);
}
