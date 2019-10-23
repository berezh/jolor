import { Color } from '../units';

it('hsl: simple', () => {
    const c = new Color('hsl(120,100%,50%)');
    expect(c.hsl).toEqual('hsl(120,100%,50%)');
    expect(c.hex).toEqual('#00ff00');
    expect(c.rgb).toEqual('rgb(0,255,0)');
});

it('hsl: from other', () => {
    expect(new Color('#00ff00').hsl).toEqual('hsl(120,100%,50%)');
    expect(new Color('rgb(0,255,0)').hsl).toEqual('hsl(120,100%,50%)');
});
