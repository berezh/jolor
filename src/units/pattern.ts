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
