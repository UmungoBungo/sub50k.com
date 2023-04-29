// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Sub 50k';
export const SITE_DESCRIPTION =
	'Great artists on Spotify with less than 50k monthly listeners.';
export const TWITTER_HANDLE = '@Umungobungo1';
export const MY_NAME = 'Matt McGillivray';

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
