# Agillic Relative Luminance

Make sure your components are properly visible using relative luminance!
Made with :heart: by Agillic

## Installation

```sh
npm install --save-dev @agillic/relative-luminance
```

Or if you're using `yarn`

```sh
yarn add --dev @agillic/relative-luminance
```

## Usage

In order to import all the functions, use:

```javascript
import agillicRelativeLuminance from '@agillic/relative-luminance'
```

or to import them separately:

```javascript
import {nameOfFunction} from '@agillic/relative-luminance'
```

Or for some good old nostalgia:

```javascript
const agillicRelativeLuminance = require('@agillic/relative-luminance')
```

Currently supported functions:

- `getLightnessFromHexColor`
- `isColorDark`
- `isColorBright`

All of the functions take one argument - an object with a string hex value as color property, e.g.:

```javascript
const argumentObject = {
  color: 'FFFF00'
}
```

### getLightnessFromHexColor

`getLightnessFromHexColor` returns color lightness as a number.

```javascript
const lightness = getLightnessFromHexColor({color: '#FFFF00'})
```

The above returns the following `0.7277058823529411`.

### isColorDark

`isColorDark` returns true if the given color is perceived as a dark color.

```javascript
const isColorDark = isColorDark({color: '0000FE'})
```

The above returns `true`.

### isColorBright

`isColorBright` returns true if the given color is perceived as a bright color.

```javascript
const isColorBright = isColorBright({color: 'FFFF00'})
```

The above returns `true`

## Scripts

- `npm run build:watch` will transpile all the sources on file save,
- `npm test` will run tests in watch mode,
- `npm run test:coverage` will run tests and report coverage statistics,
- `npm run lint` will lint the source files.


