import Image from 'next/image';
import { type KeynoteSpeaker, getSpeakers } from '../../data';

export const dynamicParams = false;

export async function generateStaticParams() {
	const speakers = await getSpeakers();
	const keynotes = speakers
		.filter((s) => 'keynote' in s)
		.map((s) => ({ day: (s as KeynoteSpeaker).keynote }));
	return keynotes;
}

export default async function Keynote({
	params,
}: {
	params: { day: string };
}) {
	'use server';
	const speakers = await getSpeakers();
	const speaker = speakers.find(
		(s) => 'keynote' in s && s.keynote === params.day,
	) as KeynoteSpeaker | undefined;
	if (!speaker) {
		throw new Error(`Could not find keynote speaker for day "${params.day}`);
	}
	const desc = speaker.description
		.split('\n')
		// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
		.map((p, i) => <p key={i}>{p}</p>);
	return (
		<div className='flex flex-col gap-8'>
			<div className='flex flex-col md:flex-row gap-8 items-center pt-8'>
				<div className='flex flex-col gap-6 items-center justify-center font-semibold'>
					<h2 className='text-convention-sunset text-5xl'>
						{`${params.day[0].toUpperCase()}${params.day.slice(1)}`}
						<br />
						Keynote
					</h2>
					<h3 className='text-convention-tangerine text-2xl'>{speaker.name}</h3>
				</div>
				<Image
					src={`/convention-2024/speakers/${speaker.image}`}
					alt={speaker.name}
					width={175}
					height={175}
					className='rounded-full shadow-lg'
				/>
			</div>
			<div className='max-w-screen-sm font-montserrat flex flex-col gap-4'>
				{desc}
			</div>
		</div>
	);
}
