import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Play is Enough - Convention 2024';
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
	// Font
	const agrandir = fetch(
		new URL('../Agrandir-GrandHeavy.otf', import.meta.url),
	).then((res) => res.arrayBuffer());

	const imageData = await fetch(
		new URL('./playisenough.png', import.meta.url),
	).then((res) => res.arrayBuffer());

	// @ts-expect-error
	// eslint-disable-next-line @next/next/no-img-element
	const img = <img src={imageData} width={436} height={300} alt='asd' />;

	return new ImageResponse(
		// ImageResponse JSX element
		<div
			style={{
				fontSize: 96,
				background: '#ffc950',
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'relative',
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: '0px',
					left: '0px',
					width: '100%',
					height: '40%',
					background: '#ff7958',
				}}
			/>
			{img}
			<span style={{ color: '#ff7958', paddingTop: '3rem' }}>CONVENTION</span>
			<span style={{ color: '#faf2e9' }}>2024</span>
		</div>,
		// ImageResponse options
		{
			// For convenience, we can re-use the exported opengraph-image
			// size config to also set the ImageResponse's width and height.
			...size,
			fonts: [
				{
					name: 'Agrandir',
					data: await agrandir,
					style: 'normal',
					weight: 400,
				},
			],
		},
	);
}
