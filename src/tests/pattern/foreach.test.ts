import { ColorRegexPattern } from '../../units';

it('colorRegex: matchColors - border', () => {
    const colorRegex = new ColorRegexPattern();
    // true
    expect(colorRegex.foreachColors('1px solid #111', () => 'gray')).toEqual(
        '1px solid gray',
    );
    expect(
        colorRegex.foreachColors('1px solid rgb( 1, 1, 1)', (x) =>
            x.replace(/\s+/gi, ''),
        ),
    ).toEqual('1px solid rgb(1,1,1)');
});

it('colorRegex: matchColors - many', () => {
    const colorRegex = new ColorRegexPattern();
    // true
    expect(
        colorRegex.foreachColors(' #111    rgb( 1, 1, 1)   gray', () => '+'),
    ).toEqual(' +    +   +');
});
