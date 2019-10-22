# Jolor

> Convert color to HEX, RGB, RGBA

## Install

```
npm install jolor
```

## Usage

```js
import { toHex, toRgb, toRgba } from 'jolor';

toHex('deepskyblue')
toHex(0, 191, 255);
toHex('rgb(0,191,255)');
toHex('rgba(0,191,255,1)');
//=> '#00bfff'

toRgb('indigo');
toRgb(75, 0, 130);
toRgb('rgba(75,0,130,1)');
toRgb('#4b0082');
//=> 'rgb(75,0,130)'

toRgba('sandybrown');
toRgba('rgb(244,164,96)');
toRgba('#f4a460');
//=> 'rgba(244,164,96,1)'

toRgba(244, 164, 96, 0.1);
//=> 'rgba(244,164,96,0.1)'
```

![#00bfff](https://placehold.it/15/00bfff?text=+) `#00bfff`
![#4b0082](https://placehold.it/15/4b0082?text=+) `#4b0082`
![#f4a460](https://placehold.it/15/f4a460?text=+) `#f4a460`