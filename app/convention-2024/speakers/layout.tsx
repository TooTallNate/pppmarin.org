export default function SpeakersLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className='p-6 md:p-12 pt-16 bg-convention-peachcream flex flex-col w-screen items-center gap-12'>
			<h3 className='uppercase font-agrandir text-convention-sunset text-4xl py-3'>
				Meet Our Speakers
			</h3>
			{children}
		</section>
	);
}
