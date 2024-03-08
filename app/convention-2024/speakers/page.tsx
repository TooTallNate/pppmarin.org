import Image from 'next/image';
import { type Speaker as ISpeaker, data } from '../data';
import Link from 'next/link';
import { toSlug } from './slug';

function Speaker({ speaker }: { speaker: ISpeaker }) {
	const slug = toSlug(speaker.name);
	return (
		<Link
			href={`/convention-2024/speakers/${slug}`}
			className='flex gap-8 hover:underline decoration-convention-tangerine items-center outline-none'
		>
			<Image
				src={`/convention-2024/speakers/${speaker.image}`}
				alt={speaker.name}
				className='rounded-md shadow-md'
				width={150}
				height={150}
			/>
			<div className='font-montserrat text-convention-sunset font-bold uppercase max-w-80'>
				{speaker.name}
			</div>
		</Link>
	);
}

export default async function Speakers() {
	'use server';
	return (
		<>
			{data.speakers.map((s) => (
				<Speaker key={s.image} speaker={s} />
			))}
		</>
	);
}
