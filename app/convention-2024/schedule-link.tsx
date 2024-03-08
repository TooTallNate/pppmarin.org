export function ScheduleLink({ home }: { home?: boolean }) {
	const bg = home
		? 'bg-convention-golden hover:bg-convention-tangerine'
		: 'bg-convention-peachcream hover:bg-convention-sunbeam';
	return (
		<a
			href='/convention-2024/Convention 2024 Schedule & Map.pdf'
			className={`border font-montserrat rounded-md shadow-md relative text-slate-800 border-grey-200 transition-all p-2 ${bg}`}
		>
			View Schedule
		</a>
	);
}
