import { camelTo } from './mappers/camel';
import { kebabTo } from './mappers/kebab';
import { pascalTo } from './mappers/pascal';
import { snakeTo } from './mappers/snake';
import { CaseMapper } from './types';

const mcgill = (input: string) => {
  let from: CaseMapper = getDefaultCaseMapper(input);
  const setFrom = (mapper: CaseMapper) => () => {
    from = mapper;
  };

  return {
    to: {
      pascal: () => from.pascal(input),
      camel: () => from.camel(input),
      snake: () => from.snake(input),
      kebab: () => from.kebab(input),
    },
    from: {
      pascal: () => setFrom(pascalTo),
      camel: () => setFrom(camelTo),
      snake: () => setFrom(snakeTo),
      kebab: () => setFrom(kebabTo),
    },
  };
};

const getDefaultCaseMapper = (input: string): CaseMapper => {
  if (input.includes('-')) {
    return kebabTo;
  }
  if (input.includes('_')) {
    return snakeTo;
  }
  if (input[0] === input[0].toUpperCase()) {
    return pascalTo;
  }
  if (input[0] === input[0].toLowerCase()) {
    return camelTo;
  }
  throw new Error('Unknown case');
};

export default mcgill;
