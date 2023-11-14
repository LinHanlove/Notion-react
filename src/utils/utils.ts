import { getToken } from ".";

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

/** 请求头处理 */
export const buildHeaders = () => {
  const token = getToken();
  const timeStamp = new Date().getTime();
  return {
    // 登陆时返回的 token
    Authorization: `Bearer ${token}`,
    time: timeStamp,
  };
};
/**请求数据处理 */
export const dateToString = (data?: any) => {
  if (!(data instanceof Object) || data instanceof FormData) {
    return data;
  }

  const keys = Object.keys(data);

  return keys.reduce<any>((previousValue, currentValue) => {
    const value = data[currentValue];
    previousValue[currentValue] =
      value instanceof Date ? formatDateTime(value) : value;
    return previousValue;
  }, {});
};

export const formatDateTime = (value: any) => {
  const date = value instanceof Date ? value : new Date(value);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
