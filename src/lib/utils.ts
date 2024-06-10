import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function toKebabCase(str: string) {
  return str.toLowerCase().replace(/\s+/g, '-');
}
