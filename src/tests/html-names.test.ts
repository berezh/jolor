import { Color } from '../units';

it('CornflowerBlue', () => {
    const c = new Color('CornflowerBlue');
    expect(c.hex).toEqual('#6495ed');
    expect(c.rgb).toEqual('rgb(100,149,237)');
    expect(c.rgba).toEqual('rgba(100,149,237,1)');
});

it('DeepSkyBlue', () => {
    const c = new Color('deepskyblue');
    expect(c.hex).toEqual('#00bfff');
    expect(c.rgb).toEqual('rgb(0,191,255)');
    expect(c.rgba).toEqual('rgba(0,191,255,1)');
});
