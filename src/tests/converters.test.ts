import { ColorConverter } from '../units';


it('rgbToHsl', () => {
    rgbToHsl([75, 0, 130], [275, 100, 25]);
    // toRgb('hsl(275,100%,25%)')).toEqual('rgb(75,0,130)')
    hslToRgb([275, 100, 25], [75, 0, 130]);
});

// it('rgbToHsl', () => {
//     rgbToHsl([0, 0, 0], [0, 0, 0]);
//     rgbToHsl([255, 255, 255], [0, 0, 100]);
//     rgbToHsl([255, 0, 0], [0, 100, 50]);
//     rgbToHsl([0, 255, 0], [120, 100, 50]);
//     rgbToHsl([0, 0, 255], [240, 100, 50]);
//     rgbToHsl([255, 255, 0], [60, 100, 50]);
//     rgbToHsl([0, 255, 255], [180, 100, 50]);
//     rgbToHsl([255, 0, 255], [300, 100, 50]);
//     rgbToHsl([191, 191, 191], [0, 0, 75]);
//     rgbToHsl([128, 128, 128], [0, 0, 50]);
//     rgbToHsl([128, 0, 0], [0, 100, 25]);
//     rgbToHsl([128, 128, 0], [60, 100, 25]);
//     rgbToHsl([0, 128, 0], [120, 100, 25]);
//     rgbToHsl([128, 0, 128], [300, 100, 25]);
//     rgbToHsl([0, 128, 128], [180, 100, 25]);
//     rgbToHsl([0, 0, 128], [240, 100, 25]);
// });

// it('hslToRgb', () => {
//     hslToRgb([0, 0, 0], [0, 0, 0]);
//     hslToRgb([0, 0, 100], [255, 255, 255]);
//     hslToRgb([0, 100, 50], [255, 0, 0]);
//     hslToRgb([120, 100, 50], [0, 255, 0]);
//     hslToRgb([240, 100, 50], [0, 0, 255]);
//     hslToRgb([60, 100, 50], [255, 255, 0]);
//     hslToRgb([180, 100, 50], [0, 255, 255]);
//     hslToRgb([300, 100, 50], [255, 0, 255]);
//     hslToRgb([0, 0, 75], [191, 191, 191]);
//     hslToRgb([0, 0, 50], [128, 128, 128]);
//     hslToRgb([0, 100, 25], [128, 0, 0]);
//     hslToRgb([60, 100, 25], [127, 128, 0]);
//     hslToRgb([120, 100, 25], [0, 128, 0]);
//     hslToRgb([300, 100, 25], [128, 0, 127]);
//     hslToRgb([180, 100, 25], [0, 127, 128]);
//     hslToRgb([240, 100, 25], [0, 0, 128]);
// });

function hslToRgb(hsl: number[], rgb: number[]): void {
    expect(
        ColorConverter.hslToRgb({
            h: hsl[0],
            s: hsl[1],
            l: hsl[2],
        }),
    ).toMatchObject({
        r: rgb[0],
        g: rgb[1],
        b: rgb[2],
    });
}

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
