import { CaseMapper, Cases } from '../types';
import {
  defFromKebab,
  defFromSnake,
  defMapper,
  updateFirstLatter,
} from './utils';

export const camelTo: CaseMapper = {
  [Cases.pascal]: updateFirstLatter((c) => c.toUpperCase()),
  [Cases.camel]: defMapper,
  [Cases.snake]: defFromSnake,
  [Cases.kebab]: defFromKebab,
};
