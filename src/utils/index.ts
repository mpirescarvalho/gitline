import { format, isAfter, subMonths, formatDistanceToNow } from 'date-fns';

import colors from './colors.json';

export function formatRepoDate(date: Date) {
  let dateFormat = 'dd MMM y';

  date = new Date(date);

  if (date.getFullYear() === new Date().getFullYear()) {
    dateFormat = 'dd MMM';
  }

  return format(date, dateFormat);
}

export function formatLastUpdateDate(date: Date) {
  date = new Date(date);
  const currentDate = new Date();

  const lessThanAMonth = isAfter(date, subMonths(currentDate, 1));

  if (lessThanAMonth) {
    return `Updated ${formatDistanceToNow(date)} ago`;
  } else {
    return `Updated on ${formatRepoDate(date)}`;
  }
}

export function getLanguageColor(lang: string): string {
  const color = (colors as any)[lang];
  return color ? color : '#3f3f3f';
}

export function lightOrDark(color: any) {
  var r, g, b, hsp;

  if (color.match(/^rgb/)) {
    color = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    );

    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }

  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  return hsp > 127.5 ? 'light' : 'dark';
}

export function formatNumberFloat(num: number, digits: number) {
  var si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
}

export function formatNumber(num: number) {
  const digits = num > 999 && num <= 99999 ? 1 : 0;
  return formatNumberFloat(num, digits);
}
