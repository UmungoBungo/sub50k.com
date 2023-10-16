const primaryColorScheme = ''; // "light" | "dark"

// Get theme data from local storage
// const currentTheme = localStorage.getItem('theme');
const currentTheme = sessionStorage.getItem('theme');

function getPreferTheme() {
	// return theme value in local storage if it is set
	if (currentTheme) return currentTheme;

	// return primary color scheme if it is set
	if (primaryColorScheme) return primaryColorScheme;

	// return user device's prefer color scheme
	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
}
function updateHTMLTheme(mode) {
	if (mode === 'dark') {
		document.documentElement.classList.remove('light');
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
		document.documentElement.classList.add('light');
	}
}
function updateStorageTheme(mode) {
	if (mode === 'dark') {
		sessionStorage.setItem('theme', 'dark');
	} else {
		sessionStorage.setItem('theme', 'light');
	}
}

let themeValue = getPreferTheme();

function setPreference() {
	// localStorage.setItem('theme', themeValue);
	sessionStorage.setItem('theme', themeValue);
	reflectPreference();
}

function reflectPreference() {
	const toggle = document.querySelector('#mode-toggle');
	const iconElem = toggle?.querySelector('#mode-circle');

	if (iconElem) {
		// set the toggle mode based on the html classname set in ThemeScript.astro
		if (themeValue === 'dark') {
			iconElem.classList.remove('light');
			iconElem.classList.add('dark');
		}

		// we load the toggle invisible to prevent flash
		// remove visibility class after setting initial dark/light class
		iconElem.classList.remove('invisible');
	}

	document.firstElementChild.setAttribute('data-theme', themeValue);
	document.documentElement.classList.add(themeValue);

	document
		.querySelector('#mode-toggle')
		?.setAttribute('aria-label', themeValue);

	// Get a reference to the body element
	const body = document.body;

	// Check if the body element exists before using getComputedStyle
	if (body) {
		// Get the computed styles for the body element
		const computedStyles = window.getComputedStyle(body);

		// Get the background color property
		const bgColor = computedStyles.backgroundColor;

		// Set the background color in <meta theme-color ... />
		document
			.querySelector("meta[name='theme-color']")
			?.setAttribute('content', bgColor);
	}
}

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
	function setThemeFeature() {
		// set on load so screen readers can get the latest value on the button
		reflectPreference();

		const toggle = document.querySelector('#mode-toggle');
		const iconElem = toggle?.querySelector('#mode-circle');

		// now this script can find and listen for clicks on the control
		// document.querySelector('#theme-btn')?.addEventListener('click', () => {
		document.querySelector('#mode-toggle')?.addEventListener('click', () => {
			if (themeValue === 'dark') {
				const modeToSwitch = 'light';
				iconElem.classList.remove('dark');
				iconElem.classList.add('light');
				updateHTMLTheme(modeToSwitch);
				updateStorageTheme(modeToSwitch);
				themeValue = modeToSwitch;
			} else {
				const modeToSwitch = 'dark';
				iconElem.classList.remove('light');
				iconElem.classList.add('dark');
				updateHTMLTheme(modeToSwitch);
				updateStorageTheme(modeToSwitch);
				themeValue = modeToSwitch;
			}
			setPreference();
		});
	}

	setThemeFeature();

	// Runs on view transitions navigation
	document.addEventListener('astro:after-swap', setThemeFeature);
};

// sync with system changes
// window
//   .matchMedia("(prefers-color-scheme: dark)")
//   .addEventListener("change", ({ matches: isDark }) => {
//     themeValue = isDark ? "dark" : "light";
//     setPreference();
//   });
