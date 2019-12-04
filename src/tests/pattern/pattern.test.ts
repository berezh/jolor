import { ColorRegexPattern } from '../../units';

it('regex: hex3', () => {
    const colorRegex = new ColorRegexPattern();
    // true
    expect(colorRegex.isHex3('#111')).toBeTruthy();
    expect(colorRegex.isHex3('#abf')).toBeTruthy();

    // false
    expect(colorRegex.isHex3('#1110')).toBeFalsy();
    expect(colorRegex.isHex3('#ffg')).toBeFalsy();
});

it('regex: hex6', () => {
    const colorRegex = new ColorRegexPattern();
    // true
    expect(colorRegex.isHex6('#111111')).toBeTruthy();

    // false
    expect(colorRegex.isHex6('#1111110')).toBeFalsy();
    expect(colorRegex.isHex6('#111')).toBeFalsy();
});

it('regex: hex', () => {
    const colorRegex = new ColorRegexPattern();
    // true
    expect(colorRegex.isHex('#111111')).toBeTruthy();
    expect(colorRegex.isHex('#111')).toBeTruthy();

    // false
    expect(colorRegex.isHex('#1111110')).toBeFalsy();
    expect(colorRegex.isHex('#1110')).toBeFalsy();
});

it('regex: rgb', () => {
    const colorRegex = new ColorRegexPattern();
    // true
    expect(colorRegex.isRgb('rgb(201,202,203)')).toBeTruthy();
    expect(colorRegex.isRgb('rgb(   201     ,   202,203)')).toBeTruthy();

    // false
    expect(colorRegex.isRgb('abc(201,202,203)')).toBeFalsy();
    expect(colorRegex.isRgb('rgb(201,202,203')).toBeFalsy();
});

it('regex: rgba', () => {
    const colorRegex = new ColorRegexPattern();
    // true
    expect(colorRegex.isRgba('rgba(201,202,203,1)')).toBeTruthy();

    // false
    expect(colorRegex.isRgba('rgb(201,202,203,1)')).toBeFalsy();
    expect(colorRegex.isRgba('rgba(201,202,203)')).toBeFalsy();
});

it('regex: hsl', () => {
    const colorRegex = new ColorRegexPattern();
    expect(colorRegex.isHsl('hsl(100,10%,10%)')).toBeTruthy();
    expect(colorRegex.isHsl('hsl( 100 , 10% , 10% )')).toBeTruthy();
    expect(colorRegex.isHsl('hsl(100,        10%,10%)')).toBeTruthy();
    // false
    expect(colorRegex.isHsl('1px solid rgb(0,0,0)')).toBeFalsy();
});

it('regex: isColorName', () => {
    const colorRegex = new ColorRegexPattern();
    // true
    expect(colorRegex.isColorName('blue')).toBeTruthy();
    // false
    expect(colorRegex.isColorName('solid')).toBeFalsy();
});

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
});
