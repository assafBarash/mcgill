"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = __importDefault(require("../src"));
var types_1 = require("../src/types");
describe('mcgill', function () {
    var genDescribeMsg = function (type) { return "from ".concat(type); };
    var genItMsg = function (type) { return "should map to ".concat(type); };
    describe(genDescribeMsg(types_1.Cases.camel), function () {
        var m = (0, src_1.default)('camelCase');
        it(genItMsg(types_1.Cases.pascal), function () { return expect(m.to.pascal()).toBe('CamelCase'); });
        it(genItMsg(types_1.Cases.kebab), function () { return expect(m.to.kebab()).toBe('camel-case'); });
        it(genItMsg(types_1.Cases.snake), function () { return expect(m.to.snake()).toBe('camel_case'); });
    });
    describe(genDescribeMsg(types_1.Cases.pascal), function () {
        var m = (0, src_1.default)('PascalCase');
        it(genItMsg(types_1.Cases.camel), function () { return expect(m.to.camel()).toBe('pascalCase'); });
        it(genItMsg(types_1.Cases.kebab), function () { return expect(m.to.kebab()).toBe('pascal-case'); });
        it(genItMsg(types_1.Cases.snake), function () { return expect(m.to.snake()).toBe('pascal_case'); });
    });
    describe(genDescribeMsg(types_1.Cases.kebab), function () {
        var m = (0, src_1.default)('kebab-case');
        it(genItMsg(types_1.Cases.pascal), function () { return expect(m.to.pascal()).toBe('KebabCase'); });
        it(genItMsg(types_1.Cases.camel), function () { return expect(m.to.camel()).toBe('kebabCase'); });
        it(genItMsg(types_1.Cases.snake), function () { return expect(m.to.snake()).toBe('kebab_case'); });
    });
    describe(genDescribeMsg(types_1.Cases.snake), function () {
        var m = (0, src_1.default)('snake_case');
        it(genItMsg(types_1.Cases.pascal), function () { return expect(m.to.pascal()).toBe('SnakeCase'); });
        it(genItMsg(types_1.Cases.camel), function () { return expect(m.to.camel()).toBe('snakeCase'); });
        it(genItMsg(types_1.Cases.kebab), function () { return expect(m.to.kebab()).toBe('snake-case'); });
    });
});
//# sourceMappingURL=index.spec.js.map