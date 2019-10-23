import { Hsl, Rgb } from '../interfaces';

export const ColorLength = 255;
export const MaxDegree = 360;

export class ColorConverter {
    public static rgbToHsl(rgb: Rgb): Hsl {
        const r = rgb.r / ColorLength;
        const g = rgb.g / ColorLength;
        const b = rgb.b / ColorLength;
        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);
        const delta = max - min;
        let h = 0;
        let s = 0;

        if (max === min) {
            h = 0;
        } else if (r === max) {
            h = (g - b) / delta;
        } else if (g === max) {
            h = 2 + (b - r) / delta;
        } else if (b === max) {
            h = 4 + (r - g) / delta;
        }

        h = Math.round(Math.min(h * 60, MaxDegree));

        if (h < 0) {
            h += MaxDegree;
        }

        const l = (min + max) / 2;

        if (max === min) {
            s = 0;
        } else if (l <= 0.5) {
            s = delta / (max + min);
        } else {
            s = delta / (2 - max - min);
        }

        return { h, s: Math.round(s * 100), l: Math.round(l * 100) };
    }

    // public static hslToRgb(hsl: Hsl): Rgb {
    //     const h = hsl.h / MaxDegree;
    //     const s = hsl.s / 100;
    //     const l = hsl.l / 100;

    //     let r: number = 0;
    //     let g: number = 0;
    //     let b: number = 0;
    //     if (s === 0) {
    //         r = l;
    //         g = l;
    //         b = l;
    //     } else {
    //         const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    //         const p = 2 * l - q;
    //         r = ColorConverter.hue2rgb(p, q, h + 1 / 3);
    //         g = ColorConverter.hue2rgb(p, q, h);
    //         b = ColorConverter.hue2rgb(p, q, h - 1 / 3);
    //     }

    //     return {
    //         r: Math.round(r * ColorLength),
    //         g: Math.round(g * ColorLength),
    //         b: Math.round(b * ColorLength),
    //     };

    //     // return { Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    // }

    // private static hue2rgb(p: number, q: number, t: number): number {
    //     if (t < 0) {
    //         t += 1;
    //     }
    //     if (t > 1) {
    //         t -= 1;
    //     }
    //     if (t < 1 / 6) {
    //         return p + (q - p) * 6 * t;
    //     }
    //     if (t < 1 / 2) {
    //         return q;
    //     }
    //     if (t < 2 / 3) {
    //         return p + (q - p) * (2 / 3 - t) * 6;
    //     }

    //     return p;
    // }

    public static hslToRgb(hsl: Hsl): Rgb {
        const h = hsl.h / MaxDegree;
        const s = hsl.s / 100;
        const l = hsl.l / 100;
        let t2;
        let val;

        if (s === 0) {
            val = Math.round(l * ColorLength);
            return { r: val, g: val, b: val };
        }

        if (l < 0.5) {
            t2 = l * (1 + s);
        } else {
            t2 = l + s - l * s;
        }

        const t1 = 2 * l - t2;

        const result: number[] = [0, 0, 0];
        for (let i = 0; i < 3; i++) {
            let t3 = h + (1 / 3) * -(i - 1);
            if (t3 < 0) {
                t3++;
            }

            if (t3 > 1) {
                t3--;
            }

            if (6 * t3 < 1) {
                val = t1 + (t2 - t1) * 6 * t3;
            } else if (2 * t3 < 1) {
                val = t2;
            } else if (3 * t3 < 2) {
                val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
            } else {
                val = t1;
            }

            result[i] = Math.round(val * 255);
        }

        return {
            r: result[0],
            g: result[1],
            b: result[2],
        };
    }

    // https://stackoverflow.com/questions/39118528/rgb-to-hsl-conversion
    // https://github.com/Qix-/color-convert/blob/HEAD/conversions.js
}
