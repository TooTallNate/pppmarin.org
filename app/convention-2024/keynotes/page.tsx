import Image from 'next/image';

export default function Keynotes() {
	return (
		<section className='p-6 md:p-12 pt-16 bg-convention-peachcream flex flex-col w-screen items-center gap-8'>
			<Keynote
				day='Friday'
				name='Miriam Beloglovsky, M.A.'
				image='/convention-2024/speakers/Miriam Beloglovsky.png'
			>
				<p>
					As a professor of early childhood education, sought-after public
					speaker, CEO of Playful Transformation, and author, Miriam
					Beloglovsky&apos;s goal is to engage, inspire, and motivate audiences
					worldwide to explore the power of play and embrace play as a vehicle
					that transforms their life. Miriam is the author of the “Loose Parts”
					book series, which showcases her advocacy for play with unscripted
					materials.
				</p>
				<p>
					Miriam&apos;s keynote, Just Play: Rekindling Adult Creativity, delves
					into the dynamic tapestry of adulthood, where amidst our roles and
					responsibilities, the concept of &apos;play&apos; often gets lost or
					dismissed as frivolous. Yet, &quot;Just Play&quot; is a testament to
					the profound importance of play in adult life, underscoring how it is
					beneficial and essential for fostering creativity, adaptiveness, and
					holistic well-being.
				</p>
				<p>
					Play is not just an act; it&apos;s a state of being that can elevate
					every facet of life. By harnessing play&apos;s joy and unbound
					potential, adults can rediscover their childhood genius — the spark of
					transformation and creativity that can change the world. &quot;Just
					Play&quot; is more than a keynote; it&apos;s an invitation, a call to
					action for adults to reengage with their innate playful spirits, a
					quality we often attribute solely to childhood. This insightful
					workshop explores how play can catalyze transformational growth for
					both children and adults.
				</p>
			</Keynote>
			<hr className='bg-convention-sunset border-0 w-24 h-px' />
			<Keynote
				day='Saturday'
				name='Julie Nicholson, Ph.D, MBA'
				image='/convention-2024/speakers/Julie Nicholson.jpg'
			>
				<p>
					Dr. Julie Nicholson is an early learning champion, a former preschool
					and kindergarten teacher, a parent of three daughters and a former
					parent and President of a Bay Area parent participation preschool. She
					was a Professor of Practice at Mills College in Oakland for 17 years
					where she directed several innovative programs including the
					Leadership Program in Early Childhood, a Joint MBA/MA Educational
					Leadership Program and the Center for Global Play Research. Dr.
					Nicholson is co-author of 13 books and many journal articles. Her most
					recent books include The Powerful Role of Play in Education and
					Creating Equitable Early Learning Environments for Young Boys of
					Color: Disrupting Disproportionate Outcomes (2023; both published by
					the California Department of Education), Principals as Early Learning
					Leaders: Effectively Supporting Our Youngest Learners (2022; Teachers
					College Press) and Supporting Young Children to Cope, Build Resilience
					and Heal from Trauma through Play: A Practical Guide (2023;
					Routledge). Her forthcoming book, Reducing Stress in Schools:
					Trauma-Responsive Strategies to Support Teachers and Students (2024,
					Harvard Education Press) is focused on PreK-12 teachers and
					administrators. Julie is currently the Vice President of
					Implementation and Impact at Children’s Funding Project. She regularly
					gives keynotes and provides professional development, coaching and
					mentoring to individuals, agencies, schools/districts, and state
					leadership teams across the U.S. She has extensive experience
					participating in policy committees, serving on non-profit Boards, and
					participating in international policy, research and practice-focused
					projects.
				</p>
				<p>
					During her keynote, Dr. Nicholson will guide us in celebrating the
					powerful role of play in supporting young children&apos;s learning,
					development, and overall well-being. Weaving together authentic
					stories, contemporary research, and windows into high quality early
					learning environments, she will highlight the sights and sounds of
					powerful learning for preschool-aged children and the complex role of
					early childhood teachers and families who are entrusted to guide them
					during a critical time for their brain and body development.
					Participants will see developmentally informed early learning
					environments in action. Dr. Nicholson will inspire all of us to see
					our collective opportunity and responsibility to create inclusive,
					engaging, equitable and healing play-based environments for our
					youngest learners.
				</p>
			</Keynote>
		</section>
	);
}

function Keynote({
	children,
	day,
	name,
	image,
}: {
	children: React.ReactNode;
	day: string;
	name: string;
	image: string;
}) {
	return (
		<>
			<div className='flex flex-col md:flex-row gap-8 items-center'>
				<div className='flex flex-col gap-6 items-center justify-center font-semibold'>
					<h2 className='text-convention-sunset text-5xl'>
						{day}
						<br />
						Keynote
					</h2>
					<h3 className='text-convention-tangerine text-2xl'>{name}</h3>
				</div>
				<Image
					src={image}
					alt={name}
					width={175}
					height={175}
					className='rounded-full'
				/>
			</div>
			<div className='max-w-screen-sm font-montserrat flex flex-col gap-4'>
				{children}
			</div>
		</>
	);
}
