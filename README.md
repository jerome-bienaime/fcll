# New Project

Storybook : https://jerome-bienaime.github.io/fcll/

> Bootstrapped with Create Snowpack App (CSA) - trigram-template-lite

* Snowpack dev server
* React
* Typescript
* Tailwind - configured via postcss
* @ alias for src/
* Opinionated view structure 

### Changes from @snowpack/template-react-typescript

*Tailwind support*
* + @snowpack/plugin-postcss (depends on `postcss` & `postcss-cli`)
* + postcss.config.js - requires `tailwindcss` and `autoprefixer`
* + tailwind.config.js - config & theme file for tailwind
* + /src/index.css includes tailwind postcss modules
* /src/views/App.tsx uses tailwind classes 

*Alias*
* `@` alias for `/src` allows absolute access to `/src` root from anywhere
* added in `snowpack.config.js` `alias` config
* added in `tsconfig.json` `path` config

*Structure*
* More opinionated structure, `/views` and `/components` under `/ui`

*Components*
* Added simple Button and Header components as well as HBox & VBox layout convenience components
* TODO: More complete themeable skeleton component set

*util*
* Added css utility for working with tailwind 

### TODO

* Add Image optimization 
* Accessibility 

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.js` config file.

### npm test

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
