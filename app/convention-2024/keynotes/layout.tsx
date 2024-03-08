import { ScheduleLink } from '../schedule-link';
import { TocLi } from '../table-of-contents';

export default function Keynotes({ children }: { children: React.ReactNode }) {
	return (
		<section className='p-6 md:p-12 pt-16 bg-convention-peachcream flex flex-col w-screen items-center gap-4'>
			<h3 className='uppercase font-agrandir text-convention-sunset text-4xl pt-3'>
				Keynotes
			</h3>
			<ol className='flex gap-4'>
				<TocLi href='/convention-2024/keynotes/friday' parts={4}>
					Friday
				</TocLi>
				<TocLi href='/convention-2024/keynotes/saturday' parts={4}>
					Saturday
				</TocLi>
			</ol>
			<ScheduleLink />
			{children}
		</section>
	);
}
