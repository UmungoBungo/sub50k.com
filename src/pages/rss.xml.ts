import rss from '@astrojs/rss';
import {getCollection} from 'astro:content';
import {SITE_TITLE, SITE_DESCRIPTION, SITE_URL} from '../config';

export async function get() {
	const allPosts = await getCollection('artist');

	const sortedPosts = allPosts
		.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
		.filter((post) => !post.data.draft);

	let baseUrl = SITE_URL;
	baseUrl = baseUrl.replace(/\/+$/g, '');

	return rss({
		stylesheet: '/rss/styles.xsl',
		// `<title>` field in output xml
		title: SITE_TITLE,
		// `<description>` field in output xm
		description: SITE_DESCRIPTION,
		site: baseUrl,
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and glob imports
		items: sortedPosts.map((artist) => ({
			title: artist.data.name,
			pubDate: artist.data.publishDate,
			description: artist.data.description,
			link: `${baseUrl}/artist/${artist.data.name}`,
		})),
		// (optional) inject custom xml
		customData: `<language>en-us</language>`,
	});
}
