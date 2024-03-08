import { data } from '../../data';
import { toSlug } from '../slug';
import Image from 'next/image';

export const dynamicParams = false;

export async function generateStaticParams() {
	return data.speakers.map((s) => ({ name: toSlug(s.name) }));
}

export default async function SpeakerPage({
	params,
}: {
	params: { name: string };
}) {
	'use server';
	const speaker = data.speakers.find((s) => toSlug(s.name) === params.name);
	if (!speaker) {
		throw new Error(`Could not find information for "${params.name}"`);
	}
	const desc = speaker.description
		.split('\n')
		// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
		.map((l, i) => <p key={i}>{l}</p>);
	return (
		<div className='flex flex-col md:flex-row gap-8 justify-center items-center max-w-screen-sm'>
			<Image
				src={`/convention-2024/speakers/${speaker.image}`}
				alt={speaker.name}
				width={300}
				height={300}
				className='rounded-lg shadow-lg'
			/>
			<div className='flex flex-col gap-8 font-montserrat'>
				<h4 className='uppercase font-bold text-convention-sunset text-2xl'>
					{speaker.name}
				</h4>
				{desc}
			</div>
		</div>
	);
}
