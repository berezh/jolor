import { Color } from '../units';

it('params: array 3', () => {
    const c = new Color([0, 100, 200]);
    expect(c.rgb).toEqual('rgb(0,100,200)');
});

it('params: array 4', () => {
    const c = new Color([0, 100, 200, 0.7]);
    expect(c.rgba).toEqual('rgba(0,100,200,0.7)');
});
