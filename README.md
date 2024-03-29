# Jolor

JavaScript color converter to HEX, RGB, RGBA, HSL

<a href="https://www.npmjs.com/package/jolor">
    <img src="https://nodei.co/npm/jolor.png?mini=true">
</a>

## Install

```
npm install jolor
```

## IsColor

Checks if a string is HTML colors value

```ts
import { isColor } from 'jolor';

isColor('white');
isColor('#888');
isColor('#f1f1f1');
isColor('rgb(0,100,255)');
isColor('hsl(100,50%,80%)');
//=> true
```

## Color converting

```ts
import { toHex, toRgb, toRgba, toHsl } from 'jolor';

toHex('deepskyblue');
toHex(0, 191, 255);
toHex([0, 191, 255]);
toHex('rgb(0,191,255)');
toHex('hsl(195,100%,50%)');
//=> '#00bfff'
```

![#00bfff](https://placehold.it/30/00bfff?text=+)

```js
toRgb('indigo');
toRgb(75, 0, 130);
toRgb([75, 0, 130]);
toRgb('#4b0082');
//=> 'rgb(75,0,130)'

toRgb('hsl(275, 100%, 25%)');
//=> 'rgb(74, 0, 128)'
```

![#4b0082](https://placehold.it/30/4b0082?text=+)

```js
toRgba('sandybrown');
toRgba('rgb(244,164,96)');
toRgba('#f4a460');
//=> 'rgba(244,164,96,1)'

toRgba([244, 164, 96, 0.1]);
toRgba(244, 164, 96, 0.1);
//=> 'rgba(244,164,96,0.1)'

toRgba('hsl(28, 87%, 67%)');
//=> 'rgba(244,166,98,1)'
```

![#f4a460](https://placehold.it/30/f4a460?text=+)

```js
toHsl('purple');
toHsl([128, 0, 128]);
toHsl(128, 0, 128);
toHsl('rgb(128,0,128)');
toHsl('#800080');
//=> 'hsl(300,100%,25%)'
```

![#800080](https://placehold.it/30/800080?text=+)
