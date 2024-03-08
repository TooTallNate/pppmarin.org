import Image from 'next/image';

export default function Venue() {
	return (
		<section className='p-6 md:p-12 pt-16 bg-convention-peachcream flex flex-col w-screen items-center'>
			<h3 className='uppercase font-agrandir text-convention-sunset text-4xl py-3'>
				Vendors
			</h3>
			<div className='pb-12'>
				<h4 className='font-montserrat font-bold text-xl py-8'>
					Thanks to our premium sponsor
				</h4>
				<a href='https://www.jovial.org/' target='_blank' rel='noreferrer'>
					<Image
						src='/convention-2024/vendors/jovial.png'
						alt='Jovial'
						width={300}
						height={300}
					/>
				</a>
			</div>
			<div className='max-w-screen-md'>
				<h4 className='font-montserrat font-bold text-lg sm:text-xl py-8'>
					Thanks to all of our other sponsors
				</h4>
				<div className='grid grid-cols-2 sm:flex sm:flex-wrap gap-8 items-center justify-center'>
					<a
						href='https://www.danthehealer.com/services'
						target='_blank'
						rel='noreferrer'
					>
						<Image
							src='/convention-2024/vendors/Dan-Logo-Horiz-ForWebsite.png'
							alt='Daniel Spain'
							width={200}
							height={200}
						/>
					</a>
					<a
						href='https://www.barefootbooks.com/'
						target='_blank'
						rel='noreferrer'
					>
						<Image
							src='/convention-2024/vendors/barefoot.png'
							alt='Barefoot Books'
							width={200}
							height={200}
						/>
					</a>
					<a
						href='https://www.fairyhairspa.com/'
						target='_blank'
						rel='noreferrer'
					>
						<Image
							src='/convention-2024/vendors/FAIRYHAIRSPA 3D TITLE_cropped.webp'
							alt='Fairy Hair Spa'
							width={200}
							height={200}
						/>
					</a>
					<a
						href='https://www.jamarookids.com/'
						target='_blank'
						rel='noreferrer'
					>
						<Image
							src='/convention-2024/vendors/jamaroo kids.png'
							alt='Jamaroo Kids'
							width={200}
							height={200}
						/>
					</a>
					<a href='https://hellacharged.com/' target='_blank' rel='noreferrer'>
						<Image
							src='/convention-2024/vendors/lit_logo_fa2fcce7-e312-412b-baaf-6bd7b47a154e_500x.png'
							alt='Hella Charged and Lit'
							width={200}
							height={200}
						/>
					</a>
					<a
						href='https://silverworkstudios.com/'
						target='_blank'
						rel='noreferrer'
					>
						<Image
							src='/convention-2024/vendors/SWS_Main_Logo_Black.avif'
							alt='Silverwork Studios'
							width={200}
							height={200}
						/>
					</a>
					<a href='https://emergencycafe.com/' target='_blank' rel='noreferrer'>
						<Image
							src='/convention-2024/vendors/EC_Logo.png'
							alt='Emergency Cafe'
							width={200}
							height={200}
						/>
					</a>
					<a
						href='https://www.facebook.com/p/Crazy-Honey-100070974074929/'
						target='_blank'
						rel='noreferrer'
					>
						<Image
							src='/convention-2024/vendors/crazy honey.png'
							alt='Crazy Honey'
							width={200}
							height={200}
						/>
					</a>
					<a href='https://ccppns.org/' target='_blank' rel='noreferrer'>
						<Image src='/ppcns.png' alt='PPCNS' width={200} height={200} />
					</a>
					<a
						href='https://rie.org/educaring-approach/'
						target='_blank'
						rel='noreferrer'
					>
						<Image
							src='/convention-2024/vendors/rie.png'
							alt='RIE'
							width={200}
							height={200}
						/>
					</a>
				</div>
			</div>
		</section>
	);
}
