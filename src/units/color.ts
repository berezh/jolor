import { ColorProperty } from 'csstype';
import { HtmlColorName } from './html-color-name';

const hex6Pattern = '#[a-f\\d]{6}';

function createRegex(pattern: string): RegExp {
    // const p = \\d+(\.\d+)?\gi;
    return new RegExp(pattern, 'gi');
}

const ColorPattern = {
    number: createRegex('\\d+(\\.\\d+)?'),
    hex: createRegex(hex6Pattern + '|#[a-f\\d]{3}'),
    hex3: createRegex('#[a-f\\d]{3}'),
    hex6: createRegex(hex6Pattern),
    rgb: createRegex('rgb\\((\\s*\\d+\\s*,){2}\\s*\\d+\\s*\\)'),
    rgba: createRegex('rgba\\((\\s*\\d+\\s*,){3}\\s*\\d+(\\.\\d+)?\\s*\\)'),
};

export class Color {
    public get rgb(): ColorProperty {
        return `rgb(${this.innerR},${this.innerG},${this.innerB})`;
    }

    public get rgba(): ColorProperty {
        return `rgba(${this.innerR},${this.innerG},${this.innerB},${this.innerA})`;
    }

    public get hex(): ColorProperty {
        return `#${this.intToHex(this.innerR)}${this.intToHex(this.innerG)}${this.intToHex(this.innerB)}`;
    }

    public get r(): number {
        return this.innerR;
    }

    public get g(): number {
        return this.innerG;
    }

    public get b(): number {
        return this.innerB;
    }

    public get a(): number {
        return this.innerA;
    }

    public get valid(): boolean {
        return this.innerValid;
    }

    private innerR: number = 0;
    private innerG: number = 0;
    private innerB: number = 0;
    private innerA: number = 1;
    private innerValid: boolean = false;

    constructor(color?: ColorProperty);
    constructor(r: number, g: number, b: number, a?: number);
    constructor(p1?: any, p2?: any, p3?: any, p4?: any) {
        this.parse(p1, p2, p3, p4);
    }

    public toString(): string {
        return this.hex;
    }

    public parse(color?: ColorProperty): void;
    public parse(r: number, g: number, b: number, a?: number): void;
    public parse(p1?: any, p2?: any, p3?: any, p4?: any): void {
        this.clear();
        if (typeof p1 === 'string') {
            const color = this.htmlNameToHex(p1.toLowerCase());
            const colorPatterns = [ColorPattern.hex6, ColorPattern.hex3, ColorPattern.rgb, ColorPattern.rgba];
            const pattern = colorPatterns.find(x => color.match(x));
            if (pattern) {
                this.innerValid = true;
                if (pattern === ColorPattern.hex6) {
                    this.innerR = this.hexToInt(color.substr(1, 2));
                    this.innerG = this.hexToInt(color.substr(3, 2));
                    this.innerB = this.hexToInt(color.substr(5, 2));
                } else if (pattern === ColorPattern.hex3) {
                    this.innerR = this.subHexToInt(color.charAt(1));
                    this.innerG = this.subHexToInt(color.charAt(2));
                    this.innerB = this.subHexToInt(color.charAt(3));
                } else if (pattern === ColorPattern.rgb) {
                    const numbers = color.match(ColorPattern.number) as RegExpExecArray;
                    this.innerR = this.getSubRgb(numbers[0]);
                    this.innerG = this.getSubRgb(numbers[1]);
                    this.innerB = this.getSubRgb(numbers[2]);
                } else if (pattern === ColorPattern.rgba) {
                    const numbers = color.match(ColorPattern.number) as RegExpExecArray;
                    this.innerR = this.getSubRgb(numbers[0]);
                    this.innerG = this.getSubRgb(numbers[1]);
                    this.innerB = this.getSubRgb(numbers[2]);
                    this.innerA = this.fixRange(parseFloat(numbers[3]), 0, 1);
                }
            }
        } else if (typeof p1 === 'number' && typeof p2 === 'number' && typeof p3 === 'number') {
            this.innerR = p1;
            this.innerG = p2;
            this.innerB = p3;
            this.innerA = p4;
        }
    }

    private htmlNameToHex(name: string): string {
        const htmlName: string | undefined = HtmlColorName[name];
        return htmlName ? htmlName : name;
    }

    private intToHex(value: number): string {
        let hex = value.toString(16);
        if (hex && hex.length === 1) {
            hex = '0' + hex;
        }
        return hex;
    }

    private clear(): void {
        this.innerR = 0;
        this.innerG = 0;
        this.innerB = 0;
        this.innerA = 1;
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
