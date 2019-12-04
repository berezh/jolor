import { Color } from '../units/color';

it('regex: hsl', () => {
    expect(Color.isHsl('hsl(100,10%,10%)')).toBeTruthy();
    expect(Color.isHsl('hsl( 100 , 10% , 10% )')).toBeTruthy();
    expect(Color.isHsl('hsl(100,        10%,10%)')).toBeTruthy();
});

it('regex: False', () => {
    expect(Color.isHsl('1px solid rgb(0,0,0)')).toBeFalsy();
});
