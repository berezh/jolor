import { ColorProperty } from 'csstype';
import { Color } from './units';

export function toHex(color?: ColorProperty): ColorProperty | undefined;
export function toHex(r: number, g: number, b: number, a?: number): ColorProperty | undefined;
export function toHex(p1?: any, p2?: any, p3?: any, p4?: any): ColorProperty | undefined {
    const color = new Color(p1, p2, p3, p4);
    return color.valid ? color.hex : undefined;
}

export function toRgb(color?: ColorProperty): ColorProperty | undefined;
export function toRgb(r: number, g: number, b: number, a?: number): ColorProperty | undefined;
export function toRgb(p1?: any, p2?: any, p3?: any, p4?: any): ColorProperty | undefined {
    const color = new Color(p1, p2, p3, p4);
    return color.valid ? color.rgb : undefined;
}

export function toRgba(color?: ColorProperty): ColorProperty | undefined;
export function toRgba(r: number, g: number, b: number, a?: number): ColorProperty | undefined;
export function toRgba(p1?: any, p2?: any, p3?: any, p4?: any): ColorProperty | undefined {
    const color = new Color(p1, p2, p3, p4);
    return color.valid ? color.rgba : undefined;
}

export function toHsl(color?: ColorProperty): ColorProperty | undefined;
export function toHsl(r: number, g: number, b: number, a?: number): ColorProperty | undefined;
export function toHsl(p1?: any, p2?: any, p3?: any, p4?: any): ColorProperty | undefined {
    const color = new Color(p1, p2, p3, p4);
    return color.valid ? color.hsl : undefined;
}
