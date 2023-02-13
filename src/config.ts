// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Matt M9y";
export const SITE_DESCRIPTION =
  "Dev and design dabbler, one cloudy individual.";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "Matt McGillivray";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
