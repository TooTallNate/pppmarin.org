import Image from 'next/image';
import { Address } from '../address';

export default function Venue() {
	return (
		<section className='p-6 md:p-12 pt-16 bg-convention-peachcream flex flex-col w-screen items-center gap-8'>
			<h3 className='uppercase font-agrandir text-convention-sunset text-4xl py-3'>
				Venue
			</h3>
			<Address />
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.8165307895842!2d-122.53251579999998!3d38.0047397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085982b3faf2c31%3A0x3315ad67bc2d0ed1!2sEmbassy%20Suites%20by%20Hilton%20San%20Rafael%20Marin%20County!5e0!3m2!1sen!2sus!4v1709850481831!5m2!1sen!2sus'
				title='map'
				width='100%'
				height='300'
				className='shadow-slate-300 border border-slate-400 border-x-0 w-screen md:w-full max-w-screen-sm md:border-x shadow-lg'
				allowFullScreen
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			/>
			<a href='/convention-2024/floorplan.png'>
				<Image
					src='/convention-2024/floorplan.png'
					width={1024}
					height={1024}
					alt='Floor Plan'
					className='max-w-screen-sm w-full'
					priority
				/>
				<span className='font-montserrat pt-2'>(Tap to enlarge)</span>
			</a>
		</section>
	);
}
