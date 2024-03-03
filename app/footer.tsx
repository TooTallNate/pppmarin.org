import Link from 'next/link';

export function Footer() {
	return (
		<footer className='border-t border-slate-600 p-4 w-full flex text-sm gap-3 items-center'>
			<span className='flex-none'>© 2024 </span>
			<span>
				<Link href='/' className='hover:underline'>
					Marin County Council of Parent Participation Nursery Schools
				</Link>
			</span>
		</footer>
	);
}
