import {Equation,
    Expression,
    Fraction,
} from "../algebra.js"

// Tested with bun test

test("Types work", () => {
  // Check if Equation and Expression are indeed 'function' (a way to check if they are valid types)
  expect(typeof Equation).toBe('function');
  expect(typeof Expression).toBe('function');
  expect(typeof Fraction).toBe('function');
})