"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const algebra_js_1 = require("../algebra.js");
// Tested with bun test
test("Types work", () => {
    // Check if Equation and Expression are indeed 'function' (a way to check if they are valid types)
    expect(typeof algebra_js_1.Equation).toBe('function');
    expect(typeof algebra_js_1.Expression).toBe('function');
    expect(typeof algebra_js_1.Fraction).toBe('function');
});
