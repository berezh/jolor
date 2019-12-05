import { ColorRegexPattern } from '../../units';

it('regex: isColor', () => {
    const colorRegex = new ColorRegexPattern();
    // true
    expect(colorRegex.isColor('#111')).toBeTruthy();
    expect(colorRegex.isColor('#111111')).toBeTruthy();
    expect(colorRegex.isColor('rgb(201,202,203)')).toBeTruthy();
    expect(colorRegex.isColor('rgba(201,202,203,1)')).toBeTruthy();
    expect(colorRegex.isColor('hsl(100,10%,10%)')).toBeTruthy();
    expect(colorRegex.isColor('blue')).toBeTruthy();
    // false
    expect(colorRegex.isColor('solid')).toBeFalsy();
    expect(colorRegex.isColor('#1111110')).toBeFalsy();
    expect(colorRegex.isColor('#1110')).toBeFalsy();
    expect(colorRegex.isColor('abc(201,202,203)')).toBeFalsy();
    expect(colorRegex.isColor('rgba(201,202,203)')).toBeFalsy();
    expect(colorRegex.isColor('1px solid rgb(0,0,0)')).toBeFalsy();
});

it('regex: isColor false', () => {
    const colorRegex = new ColorRegexPattern();
    expect(colorRegex.isColor('#1111110')).toBeFalsy();
    expect(colorRegex.isColor('1px solid LightSkyBlue')).toBeFalsy();
});

it('regex: isColor border', () => {
    const colorRegex = new ColorRegexPattern();
    expect(colorRegex.isColor('1px solid LightSkyBlue')).toBeFalsy();
});

