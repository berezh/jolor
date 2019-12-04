import { ColorProperty } from 'csstype';
import { Hsl, Rgb } from '../interfaces';
import { ColorConverter, ColorLength } from './converter';
import { HtmlColorName } from './html-color-name';
import { ColorRegexPattern } from './pattern';

export class Color {
    public get rgb(): ColorProperty {
        return `rgb(${this.innerRgb.r},${this.innerRgb.g},${this.innerRgb.b})`;
    }

    public get rgbObject(): Rgb {
        return this.innerRgb;
    }

    public get opacity(): number {
        return this.innerOpacity;
    }

    public get rgba(): ColorProperty {
        return `rgba(${this.innerRgb.r},${this.innerRgb.g},${this.innerRgb.b},${this.innerOpacity})`;
    }

    public get hex(): ColorProperty {
        return `#${this.intToHex(this.innerRgb.r)}${this.intToHex(this.innerRgb.g)}${this.intToHex(this.innerRgb.b)}`;
    }

    // hsl\\(\\s*\\d+°\\s*(\\d+\\s*%){2}\\s*\\)
    public get hsl(): ColorProperty {
        return `hsl(${this.innerHsl.h},${this.innerHsl.s}%,${this.innerHsl.l}%)`;
    }

    public get valid(): boolean {
        return this.innerValid;
    }
    
    private colorRegex = new ColorRegexPattern();
    private numberRegex = new RegExp('\\d+(\\.\\d+)?', 'gi');

    private innerOpacity: number = 0;

    private innerRgb: Rgb = {
        r: 0,
        g: 0,
        b: 0,
    };

    private innerHsl: Hsl = {
        h: 0,
        s: 0,
        l: 0,
    };

    private innerValid: boolean = false;

    constructor(color?: ColorProperty);
    constructor(color: number[]);
    constructor(r: number, g: number, b: number, a?: number);
    constructor(p1?: any, p2?: any, p3?: any, p4?: any) {
        this.parse(p1, p2, p3, p4);
    }

    public toString(): string {
        return this.hex;
    }

    public parse(color?: ColorProperty): void;
    public parse(color: number[]): void;
    public parse(r: number, g: number, b: number, a?: number): void;
    public parse(p1?: any, p2?: any, p3?: any, p4?: any): void {
        this.clear();
        let rgbMode = false;
        if (typeof p1 === 'string') {
            let colorKey = p1.toLowerCase();
            if (this.colorRegex.isColor(colorKey)) {
                this.innerValid = true;
                // if color name
                if (this.colorRegex.isColorName(colorKey)) {
                    colorKey = HtmlColorName[colorKey];
                }

                if (this.colorRegex.isHex6(colorKey)) {
                    this.innerRgb = {
                        r: this.hexToInt(colorKey.substr(1, 2)),
                        g: this.hexToInt(colorKey.substr(3, 2)),
                        b: this.hexToInt(colorKey.substr(5, 2)),
                    };
                    rgbMode = true;
                } else if (this.colorRegex.isHex3(colorKey)) {
                    this.innerRgb = {
                        r: this.subHexToInt(colorKey.charAt(1)),
                        g: this.subHexToInt(colorKey.charAt(2)),
                        b: this.subHexToInt(colorKey.charAt(3)),
                    };
                    rgbMode = true;
                } else if (this.colorRegex.isRgb(colorKey)) {
                    const numbers = colorKey.match(this.numberRegex) as RegExpExecArray;
                    this.innerRgb = {
                        r: this.getSubRgb(numbers[0]),
                        g: this.getSubRgb(numbers[1]),
                        b: this.getSubRgb(numbers[2]),
                    };
                    rgbMode = true;
                } else if (this.colorRegex.isRgba(colorKey)) {
                    const numbers = colorKey.match(this.numberRegex) as RegExpExecArray;
                    this.innerRgb = {
                        r: this.getSubRgb(numbers[0]),
                        g: this.getSubRgb(numbers[1]),
                        b: this.getSubRgb(numbers[2]),
                    };
                    this.innerOpacity = this.fixRange(parseFloat(numbers[3]), 0, 1);
                    rgbMode = true;
                } else if (this.colorRegex.isHsl(colorKey)) {
                    const numbers = colorKey.match(this.numberRegex) as RegExpExecArray;
                    this.innerHsl = {
                        h: parseFloat(numbers[0]),
                        s: this.fixRange(parseFloat(numbers[1]), 0, 100),
                        l: this.fixRange(parseFloat(numbers[2]), 0, 100),
                    };

                    this.innerRgb = ColorConverter.hslToRgb(this.innerHsl);
                }
            }
        } else if (typeof p1 === 'number' && typeof p2 === 'number' && typeof p3 === 'number') {
            this.innerRgb = {
                r: p1,
                g: p2,
                b: p3,
            };
            this.innerOpacity = p4;
            rgbMode = true;
            this.innerValid = true;
        } else if (Array.isArray(p1)) {
            if (p1.length >= 3) {
                this.innerRgb = {
                    r: this.getSubRgb(p1[0]),
                    g: this.getSubRgb(p1[1]),
                    b: this.getSubRgb(p1[2]),
                };
                rgbMode = true;
                this.innerValid = true;
            }
            if (p1.length >= 4) {
                this.innerOpacity = this.fixRange(parseFloat(p1[3]), 0, 1);
            }
        }

        if (rgbMode) {
            this.innerHsl = ColorConverter.rgbToHsl(this.innerRgb);
        }
    }

    private intToHex(value: number): string {
        let hex = value.toString(16);
        if (hex && hex.length === 1) {
            hex = '0' + hex;
        }
        return hex;
    }

    private clear(): void {
        this.innerRgb = {
            r: 0,
            g: 0,
            b: 0,
        };

        this.innerHsl = {
            h: 0,
            s: 0,
            l: 0,
        };
        this.innerOpacity = 1;
        this.innerValid = false;
    }

    private hexToInt(value: string): number {
        return parseInt(value, 16);
    }

    private subHexToInt(value: string): number {
        return parseInt(value + value, 16);
    }

    private getSubRgb(value: string): number {
        return this.fixRange(parseFloat(value), 0, 255);
    }

    private fixRange(value: number, from: number, to: number): number {
        const min = from < to ? from : to;
        const max = from > to ? from : to;
        if (value < min) {
            return min;
        } else if (value > max) {
            return max;
        } else {
            return value;
        }
    }
}
