<p align="center">
    <img src="https://www.agillic.com/wp-content/uploads/2016/02/Logo.svg"
        height="170">
</p>

<p align="center">
  <a href="https://gitlab.com/agillic-ci/relative-luminance/commits/master"><img alt="pipeline status" src="https://gitlab.com/agillic-ci/relative-luminance/badges/master/pipeline.svg" /></a>
</p>
<p align="center">
  <a href="https://gitlab.com/agillic-ci/relative-luminance/commits/master"><img alt="coverage report" src="https://gitlab.com/agillic-ci/relative-luminance/badges/master/coverage.svg" /></a>
</p>

# Agillic Relative Luminance

Make sure your components are properly visible using relative luminance!
Made with :heart: by Agillic

## Installation

```sh
npm install --save @agillic/relative-luminance
```

Or if you're using `yarn`

```sh
yarn add @agillic/relative-luminance
```

## Usage

In order to import all the functions, use:

```javascript
import agillicRelativeLuminance from '@agillic/relative-luminance'
```

Or for some good old nostalgia:

```javascript
const agillicRelativeLuminance = require('@agillic/relative-luminance')
```


You can also import the functions separately:

```javascript
import {getLightnessFromHexColor, isColorDark, isColorBright} from '@agillic/relative-luminance'
```

All of the functions take one argument &ndash; an object with a string hex value as color property, e.g.:

```javascript
const argumentObject = {
  color: '#FFFF00'
}
```

### NPM Scrips description

- `build` - transpiles and builds project files and outputs them to the top-level `build` directory,
- `build:watch` - as above but additionally also watches for changes in the files and rebuilds as needed,
- `lint` - runs ESlint on all the files and outputs any warnings and errors to the console,
- `test` - runs all the tests in watch mode,
- `help` - shows description of the project's NPM scripts.

### getLightnessFromHexColor

`getLightnessFromHexColor` returns color lightness as a number.

```javascript
const lightness = getLightnessFromHexColor({color: '#FFFF00'})
```

The above returns the following `0.7277058823529411`.

### isColorDark

`isColorDark` returns `true` if the given color is perceived as a dark color.

```javascript
const isColorDark = isColorDark({color: '#0000FE'})
```

The above returns `true`.

### isColorBright

`isColorBright` returns `true` if the given color is perceived as a bright color.

```javascript
const isColorBright = isColorBright({color: '#FFFF00'})
```

The above returns `true`.

## Scripts

- `npm run build:watch` will transpile all the sources on file save,
- `npm test` will run tests in watch mode,
- `npm run test:coverage` will run tests and report coverage statistics,
- `npm run lint` will lint the source files.


