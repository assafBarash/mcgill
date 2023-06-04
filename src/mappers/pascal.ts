import { CaseMapper, Cases } from '../types';
import {
  defFromKebab,
  defFromSnake,
  defMapper,
  updateFirstLatter,
} from './utils';

export const pascalTo: CaseMapper = {
  [Cases.pascal]: defMapper,
  [Cases.camel]: updateFirstLatter((c) => c.toLocaleLowerCase()),
  [Cases.snake]: (str) => defFromSnake(str).slice(1),
  [Cases.kebab]: (str) => defFromKebab(str).slice(1),
};
