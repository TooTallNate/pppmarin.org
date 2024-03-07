import fs from 'fs';
import { join } from 'path';

export interface Speaker {
	name: string;
	image: string;
	description: string;
}

export interface KeynoteSpeaker extends Speaker {
	keynote: string;
}

export interface Workshop {
	day: string;
	speakers?: string[];
	speaker?: string;
	title: string;
	description: string;
}

export async function getData() {
	const json = await fs.promises.readFile(
		join(__dirname, '../../../../../../app/convention-2024/data.json'),
		'utf8',
	);
	const data: { speakers: Speaker[]; workshops: Workshop[] } = JSON.parse(json);
	return data;
}

export async function getSpeakers() {
	const data = await getData();
	return data.speakers;
}
