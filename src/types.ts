export enum Cases {
  pascal = 'pascal',
  camel = 'camel',
  snake = 'snake',
  kebab = 'kebab',
}

export type CaseMapper = Record<Cases, (str: string) => string>;

const camelTo: CaseMapper = {
  [Cases.pascal]: (str) => str[0].toUpperCase() + str.slice(1),
  [Cases.camel]: (str) => str,
  [Cases.snake]: (str) =>
    str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`),
  [Cases.kebab]: (str) =>
    str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`),
};

const pascalTo: CaseMapper = {
  [Cases.pascal]: (str) => str,
  [Cases.camel]: (str) => str[0].toLowerCase() + str.slice(1),
  [Cases.snake]: (str) =>
    str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`),
  [Cases.kebab]: (str) =>
    str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`),
};

const kebabToCamel = (str: string) =>
  str
    .toLowerCase()
    .replace(/([-][a-z])/g, (group) => group.toUpperCase().replace('-', ''));

const snakeToCamel = (str: string) =>
  str
    .toLowerCase()
    .replace(/([_][a-z])/g, (group) => group.toUpperCase().replace('_', ''));

const snakeTo: CaseMapper = {
  [Cases.camel]: snakeToCamel,
  [Cases.pascal]: (str) => camelTo[Cases.pascal](snakeToCamel(str)),
  [Cases.snake]: (str) => str,
  [Cases.kebab]: (str) => str.replace(/_/g, '-'),
};

const kebabTo: CaseMapper = {
  [Cases.camel]: kebabToCamel,
  [Cases.pascal]: (str) => camelTo[Cases.pascal](kebabToCamel(str)),
  [Cases.snake]: (str) => str.replace(/-/g, '_'),
  [Cases.kebab]: (str) => str,
};
