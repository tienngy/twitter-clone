/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  arrowParens: 'avoid',
  singleQuote: true,
  bracketSpacing: true,
  semi: false,
  endOfLine: 'lf',
  tabWidth: 2,
  trailingComma: 'none'
};

module.exports = config;
