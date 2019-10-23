import { Color } from '../units';

it('empty', () => {
    const c = new Color();
    expect(c.rgb).toEqual('rgb(0,0,0)');
    expect(c.rgba).toEqual('rgba(0,0,0,1)');
});
it('3 number: 201, 202, 203', () => {
    const c = new Color(201, 202, 203);
    expect(c.rgbObject.r).toEqual(201);
    expect(c.rgbObject.g).toEqual(202);
    expect(c.rgbObject.b).toEqual(203);
    expect(c.rgb).toEqual('rgb(201,202,203)');
    expect(c.hex).toEqual('#c9cacb');
});
it('4 number: 201, 202, 203, 0.7', () => {
    const c = new Color(201, 202, 203, 0.7);
    expect(c.rgbObject.r).toEqual(201);
    expect(c.rgbObject.g).toEqual(202);
    expect(c.rgbObject.b).toEqual(203);
    expect(c.opacity).toEqual(0.7);
    expect(c.rgba).toEqual('rgba(201,202,203,0.7)');
});
it('string', () => {
    let c = new Color('201,202,203');
    expect(c.rgb).toEqual('rgb(0,0,0)');
    expect(c.hex).toEqual('#000000');

    c = new Color('hello');
    expect(c.rgb).toEqual('rgb(0,0,0)');
    expect(c.hex).toEqual('#000000');

    c = new Color('rgb(201,202,203)');
    expect(c.rgb).toEqual('rgb(201,202,203)');
});

it('rgb', () => {
    // expect(new RegExp('rgb\\((\\s*\\d+\\s*,){2}\\s*\\d+\\s*\\)', 'gi').test('rgb( 201 , 202 , 203 )')).toEqual(true);

    const c = new Color('rgb(201,202,203)');
    expect(c.rgb).toEqual('rgb(201,202,203)');
    const c2 = new Color('rgb( 201 , 202 , 203 )');
    expect(c2.rgb).toEqual('rgb(201,202,203)');
});
it('rgba', () => {
    const c = new Color('rgba(201,202,203,0.5)');
    expect(c.rgba).toEqual('rgba(201,202,203,0.5)');
    const c2 = new Color('rgba( 201 , 202 , 203 , 0.5)');
    expect(c2.rgba).toEqual('rgba(201,202,203,0.5)');
});

it('hex string', () => {
    const c = new Color('#B8C0D8');
    expect(c.rgb).toEqual('rgb(184,192,216)');
    expect(c.hex).toEqual('#b8c0d8');
});

it('hex3 string', () => {
    const c = new Color('#ABC');
    expect(c.rgb).toEqual('rgb(170,187,204)');
    expect(c.hex).toEqual('#aabbcc');

    const c1 = new Color('#ABC');
    const c2 = new Color('#AABBCC');
    expect(c1.rgb).toEqual(c2.rgb);
    expect(c1.hex).toEqual(c2.hex);
});

it('toString', () => {
    const c = new Color('#b8c0d8');
    expect(c.toString()).toEqual('#b8c0d8');
});
