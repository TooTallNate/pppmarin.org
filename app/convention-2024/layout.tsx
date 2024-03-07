import Image from 'next/image';
import { Heading } from '@/app/components/heading';
import { TableOfContents } from './table-of-contents';

import playisenough from '@/public/playisenough.png';

export default function Convention2024({
	children,
}: {
	children: React.ReactNode;
}) {
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
			{children}
		</>
	);
}
