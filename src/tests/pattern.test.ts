import { Color } from '../units';

it('regex: hsl', () => {
    expect(Color.isHsl('hsl(100,10%,10%)')).toBeTruthy();
    expect(Color.isHsl('hsl( 100 , 10% , 10% )')).toBeTruthy();
    expect(Color.isHsl('hsl(100,        10%,10%)')).toBeTruthy();
});
