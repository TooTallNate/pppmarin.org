import Image, { ImageProps } from 'next/image';

export function SchoolCard({
	href,
	image,
	name,
	street,
	city,
}: {
	href: string;
	image: ImageProps['src'];
	name: string;
	street: string;
	city: string;
}) {
	return (
		<a
			href={href}
			target='_blank'
			className='flex flex-col w-72 rounded-lg shadow-sm border hover:shadow-md items-center bg-white m-2 p-2 hover:bg-blue-100 text-center transition-all'
		>
			<Image src={image} alt={name} width={200} height={200} />
			<p className='pt-4'>{name}</p>
			<p className='text-sm italic'>
				{street}
				<br />
				{city}
			</p>
		</a>
	);
}
