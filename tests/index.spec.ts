import mcgill from '../src';
import { Cases } from '../src/types';

describe('mcgill', () => {
  const genDescribeMsg = (type: Cases) => `from ${type}`;
  const genItMsg = (type: Cases) => `should map to ${type}`;

  describe(genDescribeMsg(Cases.camel), () => {
    const m = mcgill('camelCase');

    it(genItMsg(Cases.pascal), () => expect(m.to.pascal()).toBe('CamelCase'));
    it(genItMsg(Cases.kebab), () => expect(m.to.kebab()).toBe('camel-case'));
    it(genItMsg(Cases.snake), () => expect(m.to.snake()).toBe('camel_case'));
  });

  describe(genDescribeMsg(Cases.pascal), () => {
    const m = mcgill('PascalCase');

    it(genItMsg(Cases.camel), () => expect(m.to.camel()).toBe('pascalCase'));
    it(genItMsg(Cases.kebab), () => expect(m.to.kebab()).toBe('pascal-case'));
    it(genItMsg(Cases.snake), () => expect(m.to.snake()).toBe('pascal_case'));
  });

  describe(genDescribeMsg(Cases.kebab), () => {
    const m = mcgill('kebab-case');

    it(genItMsg(Cases.pascal), () => expect(m.to.pascal()).toBe('KebabCase'));
    it(genItMsg(Cases.camel), () => expect(m.to.camel()).toBe('kebabCase'));
    it(genItMsg(Cases.snake), () => expect(m.to.snake()).toBe('kebab_case'));
  });

  describe(genDescribeMsg(Cases.snake), () => {
    const m = mcgill('snake_case');

    it(genItMsg(Cases.pascal), () => expect(m.to.pascal()).toBe('SnakeCase'));
    it(genItMsg(Cases.camel), () => expect(m.to.camel()).toBe('snakeCase'));
    it(genItMsg(Cases.kebab), () => expect(m.to.kebab()).toBe('snake-case'));
  });
});
