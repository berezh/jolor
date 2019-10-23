export interface Rgb {
    r: number;
    g: number;
    b: number;
}

export interface Hsl {
    h: number;
    s: number;
    l: number;
}

const maxLength = 255;

export const ColorConverter = {
    // rgbToHex: (
    //     r: number,
    //     g: number,
    //     b: number,
    // ): {
    //     h: number;
    //     s: number;
    //     l: number;
    // } => {
    //     let h = 0;
    //     const s = 0;
    //     const l = 0;

    //     const rR = r / maxLength;
    //     const gR = g / maxLength;
    //     const bR = b / maxLength;

    //     const cMax = Math.max(rR, gR, bR);
    //     const cMin = Math.min(rR, gR, bR);

    //     const delta = Math.abs(cMax - cMin);

    //     if (cMax === rR) {
    //         h = 0.6 * ((gR - bR) / delta);
    //     } else if (cMax === gR) {
    //         h = 0.6 * ((bR - rR) / delta + 2);
    //     } else {
    //         h = 0;
    //     }

    //     return {
    //         h,
    //         s,
    //         l,
    //     };
    // },
    rgbToHsl: (rgb: Rgb): Hsl => {
        const r = rgb.r / maxLength;
        const g = rgb.g / maxLength;
        const b = rgb.b / maxLength;
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

        h = Math.min(h * 60, 360);

        if (h < 0) {
            h += 360;
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
    },
    // rgb2hue: (r1: number, g1: number, b1: number): number => {
    //     const r = r1 / 255;
    //     const g = g1 / 255;
    //     const b = b1 / 255;
    //     const max = Math.max(r, g, b);
    //     const min = Math.min(r, g, b);
    //     const c = max - min;
    //     let h = 0;
    //     let segment = 0;
    //     let shift = 0;
    //     if (c !== 0) {
    //         switch (max) {
    //             case r:
    //                 segment = (g - b) / c;
    //                 shift = 0 / 60; // R° / (360° / hex sides)
    //                 if (segment < 0) {
    //                     // hue > 180, full rotation
    //                     shift = 360 / 60; // R° / (360° / hex sides)
    //                 }
    //                 h = segment + shift;
    //                 break;
    //             case g:
    //                 segment = (b - r) / c;
    //                 shift = 120 / 60; // G° / (360° / hex sides)
    //                 h = segment + shift;
    //                 break;
    //             case b:
    //                 segment = (r - g) / c;
    //                 shift = 240 / 60; // B° / (360° / hex sides)
    //                 h = segment + shift;
    //         }
    //     }

    // },
    // https://stackoverflow.com/questions/39118528/rgb-to-hsl-conversion
    // https://github.com/Qix-/color-convert/blob/HEAD/conversions.js
};
