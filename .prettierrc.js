module.exports = {
  singleQuote: true,
  bracketSpacing: false,
  useTabs: true,
  proseWrap: 'always',
  plugins: [require('prettier-plugin-tailwindcss'),require.resolve('prettier-plugin-astro')],
  tailwindConfig: './tailwind.config.cjs',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
