// This code is translated from Python to TypeScript.
// It uses a class structure to encapsulate math operations.

import { wrapper } from 'codeporting/xyz/math.js';

namespace codeporting {
    export class Math {
        static add(a: number, b: number): number {
            /** Returns the sum of two numbers. */
            return a + b;
        }

        static subtract(a: number, b: number): number {
            /** Returns the difference of two numbers. */
            return a - b;
        }

        static multiply(a: number, b: number): number {
            /** Returns the product of two numbers. */
            return a * b;
        }

        static divide(a: number, b: number): number {
            /** Returns the quotient of two numbers. */
            if (b === 0) {
                throw new Error("Cannot divide by zero!");
            }
            return a / b;
        }
    }
}