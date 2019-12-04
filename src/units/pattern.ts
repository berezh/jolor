import { HtmlColorName } from './html-color-name';

const hex6Pattern = '#[a-f\\d]{6}';

function createRegex(pattern: string): RegExp {
    return new RegExp(pattern, 'gi');
}

function wrapEmpty(pattern: string): RegExp {
    return new RegExp(`^\\s\*${pattern}\\s\*$`, 'gi');
}

export const ColorPattern = {
    number: createRegex('\\d+(\\.\\d+)?'),
    hex: wrapEmpty(hex6Pattern + '|#[a-f\\d]{3}'),
    hex3: wrapEmpty('#[a-f\\d]{3}'),
    hex6: wrapEmpty(hex6Pattern),
    rgb: wrapEmpty('rgb\\((\\s*\\d+\\s*,){2}\\s*\\d+\\s*\\)'),
    rgba: wrapEmpty('rgba\\((\\s*\\d+\\s*,){3}\\s*\\d+(\\.\\d+)?\\s*\\)'),
    hsl: wrapEmpty('hsl\\(\\s*\\d+\\s*(,\\s*\\d+%\\s*){2}\\s*\\)'),
};

export class ColorRegexPattern {
    private hex3Pattern: string = '#[a-f\\d]{3}';
    private hex6Pattern: string = '#[a-f\\d]{6}';
    private hexPattern: string = '#([a-f\\d]{6}|[a-f\\d]{3})';
    private rgbPattern: string = 'rgb\\((\\s*\\d+\\s*,){2}\\s*\\d+\\s*\\)';
    private rgbaPattern: string = 'rgba\\((\\s*\\d+\\s*,){3}\\s*\\d+(\\.\\d+)?\\s*\\)';
    private hslPattern: string = 'hsl\\(\\s*\\d+\\s*(,\\s*\\d+%\\s*){2}\\s*\\)';
    private colorNamePattern: string = this.join(...Object.keys(HtmlColorName));

    private colorPattern: string = this.join(
        this.hex3Pattern,
        this.hex6Pattern,
        this.rgbPattern,
        this.rgbaPattern,
        this.hslPattern,
        ...Object.keys(HtmlColorName),
    );

    private hex3Reg = this.wrapRegex(this.hex3Pattern);
    private hex6Reg = this.wrapRegex(this.hex6Pattern);
    private hexReg = this.wrapRegex(this.hexPattern);
    private rgbReg = this.wrapRegex(this.rgbPattern);
    private rgbaReg = this.wrapRegex(this.rgbaPattern);
    private hslReg = this.wrapRegex(this.hslPattern);
    private colorNameReg = this.wrapRegex(this.colorNamePattern);
    private colorReg = this.wrapRegex(this.colorPattern);

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

    public get color(): RegExp {
        return this.colorReg;
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
        return this.match(text, this.colorReg);
    }

    private match(text: string, regexp: RegExp): boolean {
        // return (text || '').match(regexp) !== null;
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
