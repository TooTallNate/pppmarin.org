import slugify from 'slugify';

export function toSlug(name: string) {
	return slugify(name, { lower: true, strict: true });
}
