# Jolor

    Convert color string to HEX, RGB, RGBA

[![npm package](https://img.shields.io/npm/v/jolor.svg?logo=npm)](https://www.npmjs.com/package/jolor)

## Install

```
npm install jolor
```

## Usage

```js
import { toHex, toRgb, toRgba } from 'jolor';

toHex('deepskyblue');
toHex(0, 191, 255);
toHex('rgb(0,191,255)');
toHex('rgba(0,191,255,1)');
//=> '#00bfff'
```

![#00bfff](https://placehold.it/200x30/00bfff?text=+)

`deepskyblue | #00bfff | rgb(0,191,255) | rgba(0,191,255,1)`

```js
toRgb('indigo');
toRgb(75, 0, 130);
toRgb('rgba(75,0,130,1)');
toRgb('#4b0082');
//=> 'rgb(75,0,130)'
```

![#4b0082](https://placehold.it/200x30/4b0082?text=+)

`indigo | #4b0082 | rgb(75,0,130) | rgba(75,0,130,1)`

```js
toRgba('sandybrown');
toRgba('rgb(244,164,96)');
toRgba('#f4a460');
//=> 'rgba(244,164,96,1)'

toRgba(244, 164, 96, 0.1);
//=> 'rgba(244,164,96,0.1)'
```

![#f4a460](https://placehold.it/200x30/f4a460?text=+)

`sandybrown | #f4a460 | rgb(244,164,96) | rgba(244,164,96,1)`
