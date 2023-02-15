// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "SUB 50k";
export const SITE_DESCRIPTION =
  "Artists on Spotify with less than 50k monthly listeners.";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "Matt McGillivray";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
