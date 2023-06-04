const defFrom = (val: string) => (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `${val}${letter.toLowerCase()}`);

export const updateFirstLatter = (cb: (s: string) => string) => (str: string) =>
  cb(str[0]) + str.slice(1);

export const defFromSnake = defFrom('_');
export const defFromKebab = defFrom('-');

export const defMapper = (str: string) => str;
