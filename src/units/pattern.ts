const hex6Pattern = '#[a-f\\d]{6}';

function createRegex(pattern: string): RegExp {
    return new RegExp(pattern, 'gi');
}

export const ColorPattern = {
    number: createRegex('\\d+(\\.\\d+)?'),
    hex: createRegex(hex6Pattern + '|#[a-f\\d]{3}'),
    hex3: createRegex('#[a-f\\d]{3}'),
    hex6: createRegex(hex6Pattern),
    rgb: createRegex('rgb\\((\\s*\\d+\\s*,){2}\\s*\\d+\\s*\\)'),
    rgba: createRegex('rgba\\((\\s*\\d+\\s*,){3}\\s*\\d+(\\.\\d+)?\\s*\\)'),
    hsl: createRegex('hsl\\(\\s*\\d+\\s*(,\\s*\\d+%\\s*){2}\\s*\\)'),
};
