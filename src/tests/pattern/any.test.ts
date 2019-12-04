import { ColorRegexPattern } from '../../units';

it('colorRegex: matchColors - border', () => {
    const colorRegex = new ColorRegexPattern();
    // true
    expect(colorRegex.matchColors('1px solid #111')).toMatchObject(['#111']);
    expect(colorRegex.matchColors('1px solid rgb( 1, 1, 1)')).toMatchObject(['rgb( 1, 1, 1)']);
});

it('colorRegex: matchColors - many', () => {
    const colorRegex = new ColorRegexPattern();
    // true
    expect(colorRegex.matchColors(' #111    rgb( 1, 1, 1)   gray')).toMatchObject(['#111', 'rgb( 1, 1, 1)', 'gray']);
});
