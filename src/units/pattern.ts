import { HtmlColorName } from './html-color-name';

export class ColorRegexPattern {
    private hex3Pattern: string = '#[a-f\\d]{3}';
    private hex6Pattern: string = '#[a-f\\d]{6}';
    private hexPattern: string = '#([a-f\\d]{6}|[a-f\\d]{3})';
    private rgbPattern: string = 'rgb\\((\\s*\\d+\\s*,){2}\\s*\\d+\\s*\\)';
    private rgbaPattern: string = 'rgba\\((\\s*\\d+\\s*,){3}\\s*\\d+(\\.\\d+)?\\s*\\)';
    private hslPattern: string = 'hsl\\(\\s*\\d+\\s*(,\\s*\\d+%\\s*){2}\\s*\\)';
    private colorNamePattern: string = this.join(...Object.keys(HtmlColorName));
    private anyColorPattern = this.join(
        this.hex3Pattern,
        this.hex6Pattern,
        this.rgbPattern,
        this.rgbaPattern,
        this.hslPattern,
        ...Object.keys(HtmlColorName),
    );

    // private colorPattern: string = this.join(
    //     this.hexPattern,
    //     // this.rgbPattern,
    //     // this.rgbaPattern,
    //     // this.hslPattern,
    //     ...Object.keys(HtmlColorName),
    // );

    private hex3Reg = this.wrapRegex(this.hex3Pattern);
    private hex6Reg = this.wrapRegex(this.hex6Pattern);
    private hexReg = this.wrapRegex(this.hexPattern);
    private rgbReg = this.wrapRegex(this.rgbPattern);
    private rgbaReg = this.wrapRegex(this.rgbaPattern);
    private hslReg = this.wrapRegex(this.hslPattern);
    private colorNameReg = this.wrapRegex(this.colorNamePattern);
    private anyColorReg = new RegExp(this.anyColorPattern, 'gi');

    public get test(): string {
        return this.colorNamePattern;
    }

    public get hex3(): RegExp {
        return this.hex3Reg;
    }

    public get hex6(): RegExp {
        return this.hex6Reg;
    }

    public get hex(): RegExp {
        return this.hexReg;
    }

    public get rgb(): RegExp {
        return this.rgbReg;
    }

    public get rgba(): RegExp {
        return this.rgbaReg;
    }

    public get hsl(): RegExp {
        return this.hslReg;
    }

    public get colorName(): RegExp {
        return this.colorNameReg;
    }

    public isHex3(text: string): boolean {
        return this.match(text, this.hex3Reg);
    }

    public isHex6(text: string): boolean {
        return this.match(text, this.hex6Reg);
    }

    public isHex(text: string): boolean {
        return this.match(text, this.hexReg);
    }

    public isRgb(text: string): boolean {
        return this.match(text, this.rgbReg);
    }

    public isRgba(text: string): boolean {
        return this.match(text, this.rgbaReg);
    }

    public isHsl(text: string): boolean {
        return this.match(text, this.hslReg);
    }

    public isColorName(text: string): boolean {
        return this.match(text, this.colorNameReg);
    }

    public isColor(text: string): boolean {
        return this.isHex(text) || this.isRgb(text) || this.isRgba(text) || this.isHsl(text) || this.isColorName(text);
    }

    public matchColors(text: string): string[] {
        const matches = (text || '').match(this.anyColorReg);
        return matches === null ? [] : matches;
    }

    private match(text: string, regexp: RegExp): boolean {
        regexp.lastIndex = 0;
        return regexp.test(text);
    }

    private wrap(text: string): string {
        return `^\\s\*${text}\\s\*$`;
    }

    private join(...texts: string[]): string {
        return texts.map(x => `${x}`).join('|');
    }

    private wrapRegex(pattern: string): RegExp {
        return new RegExp(this.wrap(pattern), 'gi');
    }
}
