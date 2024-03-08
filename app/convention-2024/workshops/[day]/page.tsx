import Link from 'next/link';
import { data, type Workshop as IWorkshop } from '../../data';
import { toSlug } from '../../speakers/slug';

export const dynamicParams = false;

export async function generateStaticParams() {
	return [{ day: 'friday' }, { day: 'saturday' }];
}

export default async function WorkshopsDayPage({
	params,
}: {
	params: { day: string };
}) {
	'use server';
	const workshops = data.workshops.filter((w) => w.day === params.day);
	return (
		<div className='flex flex-col'>
			<h3 className='font-agrandir uppercase text-convention-golden text-3xl pb-8 pt-12'>
				{params.day} Workshops
			</h3>
			<div className='flex flex-col gap-16'>
				{workshops.map((w) => (
					<Workshop key={w.title} workshop={w} />
				))}
			</div>
		</div>
	);
}

function Workshop({ workshop }: { workshop: IWorkshop }) {
	const speakers = (
		Array.isArray(workshop.speakers) ? workshop.speakers : [workshop.speaker]
	).map((name) => {
		const s = data.speakers.find((s) => s.name === name);
		if (!s) {
			console.log('Missing speaker data for %s', name);
		}
		return s || { name };
	});
	const desc = workshop.description
		.split('\n')
		// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
		.map((l, i) => <p key={i}>{l}</p>);
	return (
		<div className='flex flex-col gap-4 font-montserrat font-normal max-w-screen-sm'>
			<h4 className='uppercase text-convention-sunset font-bold'>
				{workshop.title}
			</h4>
			<div className='flex flex-col gap-2 uppercase font-bold'>
				{speakers.map((s) => {
					if (!s) {
						console.log(`Missing speaker: ${workshop.title}`);
						return null;
					}
					let name: React.ReactNode = s.name;
					if ('image' in s) {
						name = (
							<Link
								href={`/convention-2024/speakers/${toSlug(s.name)}`}
								className='hover:underline'
							>
								{s.name}
							</Link>
						);
					}
					return (
						<h4 key={s.name} className='text-convention-tangerine'>
							{name}
						</h4>
					);
				})}
			</div>
			<h4 className='uppercase font-bold text-gray-600'>{workshop.time}</h4>
			{desc}
		</div>
	);
}
