import { ColorConverter } from '../units';

it('rgbToHsl', () => {
    rgbToHsl([0, 0, 0], [0, 0, 0]);
    rgbToHsl([255, 255, 255], [0, 0, 100]);
    rgbToHsl([255, 0, 0], [0, 100, 50]);
    rgbToHsl([0, 255, 0], [120, 100, 50]);
    rgbToHsl([0, 0, 255], [240, 100, 50]);
    rgbToHsl([255, 255, 0], [60, 100, 50]);
    rgbToHsl([0, 255, 255], [180, 100, 50]);
    rgbToHsl([255, 0, 255], [300, 100, 50]);
    rgbToHsl([191, 191, 191], [0, 0, 75]);
    rgbToHsl([128, 128, 128], [0, 0, 50]);
    rgbToHsl([128, 0, 0], [0, 100, 25]);
    rgbToHsl([128, 128, 0], [60, 100, 25]);
    rgbToHsl([0, 128, 0], [120, 100, 25]);
    rgbToHsl([128, 0, 128], [300, 100, 25]);
    rgbToHsl([0, 128, 128], [180, 100, 25]);
    rgbToHsl([0, 0, 128], [240, 100, 25]);
});

function rgbToHsl(rgb: number[], hsl: number[]): void {
    expect(
        ColorConverter.rgbToHsl({
            r: rgb[0],
            g: rgb[1],
            b: rgb[2],
        }),
    ).toMatchObject({
        h: hsl[0],
        s: hsl[1],
        l: hsl[2],
    });
}
