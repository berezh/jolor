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

![#00bfff](https://placehold.it/30/00bfff?text=+)


```js
toRgb('indigo');
toRgb(75, 0, 130);
toRgb('rgba(75,0,130,1)');
toRgb('#4b0082');
//=> 'rgb(75,0,130)'
```

![#4b0082](https://placehold.it/30/4b0082?text=+)

```js
toRgba('sandybrown');
toRgba('rgb(244,164,96)');
toRgba('#f4a460');
//=> 'rgba(244,164,96,1)'

toRgba(244, 164, 96, 0.1);
//=> 'rgba(244,164,96,0.1)'
```

![#f4a460](https://placehold.it/30/f4a460?text=+)
