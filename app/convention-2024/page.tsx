import { Address } from './address';
import { ScheduleLink } from './schedule-link';

export default function Welcome() {
	return (
		<section className='w-screen bg-convention-sunflower p-6 md:p-12 pt-16 flex flex-col items-center'>
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
				<ScheduleLink />
			</div>
			<div className='pt-10'>
				<Address />
			</div>
		</section>
	);
}
