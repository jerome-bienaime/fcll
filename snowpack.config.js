/** @type {import("snowpack").SnowpackUserConfig } */
const path = require('path');

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    'snowpack-plugin-relative-css-urls',
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-postcss',
  ],
  alias: {
    '@': path.join(__dirname, 'src'),
    '@components': path.join(__dirname, 'src/Components'),
    '@hooks': path.join(__dirname, 'src/Hooks'),
    '@assets': path.join(__dirname, 'src/Assets'),
  },
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  // builds using esbuild!
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
