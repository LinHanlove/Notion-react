export const isNumber = (value: unknown): value is number => {
  return typeof value === "number";
};

const fillZero = (value: number) => {
  return value >= 10 ? value : `0${value}`;
};

/**日期转换 */
export function formatDate(value: null): undefined;
export function formatDate(value: undefined): undefined;
export function formatDate(value: string): string;
export function formatDate(value: number): string;
export function formatDate(value: Date): string;
export function formatDate(value: any): string;
export function formatDate(
  value: Date | number | string | undefined | null
): string | undefined {
  if (!value) {
    return undefined;
  }

  if (isNumber(value)) {
    const date = value.toString();
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);
    return `${year}-${month}-${day}`;
  }

  const date = value instanceof Date ? value : new Date(value);
  const year = date.getFullYear();
  const month = fillZero(date.getMonth() + 1);
  const day = fillZero(date.getDate());
  return `${year}-${month}-${day}`;
}

/**
 * 当 value 为 0, 或者 空字符串 这种时, 其实就不需要传过去了, 返回 undefined 即可
 */
export const optional = <T>(value: T | null | undefined) => {
  return (
    ([null, undefined, ""] as any[]).includes(value) ? undefined : value
  ) as T | undefined;
};
