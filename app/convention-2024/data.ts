import fs from 'fs';
import { join } from 'path';

export interface SpeakerBase {
	name: string;
	image: string;
	description: string;
}

export interface KeynoteSpeaker extends SpeakerBase {
	keynote: string;
}

export interface WorkshopSpeaker extends SpeakerBase {
	workshop: string;
}

export type Speaker = KeynoteSpeaker | WorkshopSpeaker;

export async function getSpeakers() {
	const json = await fs.promises.readFile(
		join(__dirname, '../../../../../../app/convention-2024/data.json'),
		'utf8',
	);
	const data: { speakers: Speaker[] } = JSON.parse(json);
	return data.speakers;
}
