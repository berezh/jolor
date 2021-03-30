import { isColor } from '../index';

it('is color: true', () => {
    expect(isColor('white')).toEqual(true);
    expect(isColor('#888')).toEqual(true);
    expect(isColor('#f1f1f1')).toEqual(true);
    expect(isColor('rgb(0,100,255)')).toEqual(true);
    expect(isColor('hsl(100,50%,80%)')).toEqual(true);
});

it('is color: false', () => {
    expect(isColor('white1')).toEqual(false);
    expect(isColor('#8888')).toEqual(false);
    expect(isColor('hsl(100,50%,hello)')).toEqual(false);
});
