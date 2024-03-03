import Image from 'next/image';
import { Heading } from '@/app/components/heading';

import playisenough from '@/public/playisenough.png';

export default function Convention2024() {
	return (
		<>
			<Image
				src={playisenough}
				alt='Play is Enough'
				width={300}
				className='w-52 md:w-72 lg:w-80'
			/>
			<Heading className='pt-2 md:pt-3 lg:pt-4'>Convention 2024</Heading>
		</>
	);
}
