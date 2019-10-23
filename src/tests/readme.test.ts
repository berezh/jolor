import { toHex, toHsl, toRgb, toRgba } from '../';

it('toRgb', () => {
    expect(toRgb('hsl(275,100%,25%)')).toEqual('rgb(75,0,130)');
});


// it('toHex', () => {
//     expect(toHex('deepskyblue')).toEqual('#00bfff');
//     expect(toHex(0, 191, 255)).toEqual('#00bfff');
//     expect(toHex('rgb(0,191,255)')).toEqual('#00bfff');
//     expect(toHex('rgba(0,191,255,1)')).toEqual('#00bfff');
//     expect(toHex('hsl(195,100%,50%)')).toEqual('#00bfff');
// });

// it('toRgb', () => {
//     expect(toRgb('indigo')).toEqual('rgb(75,0,130)');
//     expect(toRgb(75, 0, 130)).toEqual('rgb(75,0,130)');
//     expect(toRgb('rgba(75,0,130,1)')).toEqual('rgb(75,0,130)');
//     expect(toRgb('#4b0082')).toEqual('rgb(75,0,130)');
//     expect(toHsl('rgb(75,0,130)')).toEqual('hsl(275,100%,25%)');
//     expect(toRgb('hsl(275,100%,25%)')).toEqual('rgb(75,0,130)');
// });

// it('toRgba', () => {
//     expect(toRgba('sandybrown')).toEqual('rgba(244,164,96,1)');
//     expect(toRgba('rgb(244,164,96)')).toEqual('rgba(244,164,96,1)');
//     expect(toRgba('#f4a460')).toEqual('rgba(244,164,96,1)');
//     expect(toRgba(244, 164, 96, 0.1)).toEqual('rgba(244,164,96,0.1)');
// });

// it('toHsl', () => {
//     expect(toHsl('purple')).toEqual('hsl(300,100%,25%)');
//     expect(toHsl('rgb(128,0,128)')).toEqual('hsl(300,100%,25%)');
//     expect(toHsl('#800080')).toEqual('hsl(300,100%,25%)');
// });
