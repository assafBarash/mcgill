export enum Cases {
  pascal = 'pascal',
  camel = 'camel',
  snake = 'snake',
  kebab = 'kebab',
}

export type CaseMapper = Record<Cases, (str: string) => string>;

export type McGillTo = Record<Cases, () => string>;
