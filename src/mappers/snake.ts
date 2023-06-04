import { CaseMapper, Cases } from '../types';
import { camelTo } from './camel';
import { defMapper } from './utils';

const snakeToCamel = (str: string) =>
  str
    .toLowerCase()
    .replace(/([_][a-z])/g, (group) => group.toUpperCase().replace('_', ''));

export const snakeTo: CaseMapper = {
  [Cases.camel]: snakeToCamel,
  [Cases.pascal]: (str) => camelTo[Cases.pascal](snakeToCamel(str)),
  [Cases.snake]: defMapper,
  [Cases.kebab]: (str) => str.replace(/_/g, '-'),
};
