import { ColorPattern } from '../units';

it('regex: hsl', () => {
    expect('hsl(100,10%,10%)'.match(ColorPattern.hsl)).toBeTruthy();
    expect('hsl( 100 , 10% , 10% )'.match(ColorPattern.hsl)).toBeTruthy();
    expect('hsl(100,        10%,10%)'.match(ColorPattern.hsl)).toBeTruthy();
});
