import { CaseMapper, Cases } from '../types';
import { camelTo } from './camel';
import { defMapper } from './utils';

const kebabToCamel = (str: string) =>
  str
    .toLowerCase()
    .replace(/([-][a-z])/g, (group) => group.toUpperCase().replace('-', ''));

export const kebabTo: CaseMapper = {
  [Cases.camel]: kebabToCamel,
  [Cases.pascal]: (str) => camelTo[Cases.pascal](kebabToCamel(str)),
  [Cases.snake]: (str) => str.replace(/-/g, '_'),
  [Cases.kebab]: defMapper,
};
