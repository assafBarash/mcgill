import { camelTo, kebabTo, pascalTo, snakeTo } from './mappers';
import { CaseMapper, Cases } from './types';

const mcgill = (input: string) => {
  const buildTo = (caseMapper: CaseMapper): Record<Cases, () => string> =>
    Object.values(Cases).reduce(
      (acc, stringCase) => ({
        ...acc,
        [stringCase]: () => caseMapper[stringCase](input),
      }),
      {}
    ) as Record<Cases, () => string>;

  const buildFrom = (caseMapper: CaseMapper) => () => ({
    to: buildTo(caseMapper),
  });

  return {
    to: buildTo(getDefaultCaseMapper(input)),
    from: {
      pascal: buildFrom(pascalTo),
      camel: buildFrom(camelTo),
      snake: buildFrom(snakeTo),
      kebab: buildFrom(kebabTo),
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
