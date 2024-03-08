import { data, type Workshop as IWorkshop } from '../../data';

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
	const speakers = Array.isArray(workshop.speakers)
		? workshop.speakers
		: [workshop.speaker];
	const desc = workshop.description
		.split('\n')
		// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
		.map((l, i) => <p key={i}>{l}</p>);
	return (
		<div className='flex flex-col gap-4 font-montserrat font-normal max-w-screen-sm'>
			<h4 className='uppercase text-convention-sunset font-bold'>
				{workshop.title}
			</h4>
			<div className='flex flex-col'>
				{speakers.map((s) => (
					<h4 key={s} className='uppercase text-convention-tangerine font-bold'>
						{s}
					</h4>
				))}
			</div>
			{desc}
		</div>
	);
}
