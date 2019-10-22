# Jolor

> Convert color to HEX, RGB, RGBA

## Install

```
$ npm install jolor
```

## Usage

```js
import { toHex, toRgb, toRgba } from 'jolor';

toHex(170, 187, 204);
toHex('rgb(170,187,204)');
toHex('rgba(170,187,204,1)');
//=> '#aabbcc'

toRgb(170, 187, 204);
toRgb('rgba(170,187,204,1)');
toRgb('#aabbcc');
//=> 'rgb(170,187,204)'

toRgba(170, 187, 204, 0.1);
//=> 'rgba(170,187,204,0.1)'

toRgba('rgb(170,187,204)');
toRgba('#aabbcc');
//=> 'rgba(170,187,204,1)'
```
