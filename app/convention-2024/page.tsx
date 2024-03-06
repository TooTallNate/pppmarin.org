import Image from 'next/image';
import { Heading } from '@/app/components/heading';
import { TableOfContents } from './table-of-contents';

import playisenough from '@/public/playisenough.png';

export default function Convention2024() {
	return (
		<>
			<div className='flex flex-col items-center bg-convention-golden pt-8 w-screen relative '>
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

function Welcome() {
	return (
		<section className='w-screen bg-convention-sunflower p-6 md:p-12 pt-16 flex flex-col items-center'>
			<h3 className='uppercase font-agrandir text-convention-sunset text-4xl py-3'>
				Welcome
			</h3>
			<div className='max-w-screen-sm bg-convention-peachcream p-6 flex flex-col items-center gap-4 font-montserrat shadow-lg selection:bg-convention-sunset/50'>
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
			<Address />
		</section>
	);
}

function Address() {
	return (
		<a
			href='https://maps.app.goo.gl/hgerBtDUmPEdMa93A'
			target='_blank'
			rel='noreferrer'
			className='font-montserrat mt-14 hover:underline'
		>
			Embassy Suites
			<br />
			101 McInnis Parkway
			<br />
			San Rafael, CA
			<br />
		</a>
	);
}
