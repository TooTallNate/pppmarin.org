import { TocLi } from '../table-of-contents';

export default function Workshops({ children }: { children: React.ReactNode }) {
	return (
		<section className='p-6 md:p-12 pt-16 bg-convention-peachcream flex flex-col w-screen items-center'>
			<h3 className='uppercase font-agrandir text-convention-sunset text-4xl py-3'>
				Workshops
			</h3>
			<ol className='flex gap-4'>
				<TocLi href='/convention-2024/workshops/friday' parts={4}>
					Friday
				</TocLi>
				<TocLi href='/convention-2024/workshops/saturday' parts={4}>
					Saturday
				</TocLi>
			</ol>
			{children}
		</section>
	);
}
