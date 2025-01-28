// This code is using TypeScript for a calculator application.

import { wrapper } from 'codeporting/xyz/math.js';
import { Math } from './math_operations';

function calculate(operation: string, a: number, b: number): number {
    /** Performs a calculation based on the operation provided. */
    const mathInstance = new Math();
    if (operation === 'add') {
        return mathInstance.add(a, b);
    } else if (operation === 'subtract') {
        return mathInstance.subtract(a, b);
    } else if (operation === 'multiply') {
        return mathInstance.multiply(a, b);
    } else if (operation === 'divide') {
        return mathInstance.divide(a, b);
    } else {
        throw new Error("Invalid operation!");
    }
}

// Example usage
if (require.main === module) {
    let result = calculate('add', 10, 5);
    console.log(`Addition Result: ${result}`);

    result = calculate('subtract', 10, 5);
    console.log(`Subtraction Result: ${result}`);

    result = calculate('multiply', 10, 5);
    console.log(`Multiplication Result: ${result}`);

    result = calculate('divide', 10, 5);
    console.log(`Division Result: ${result}`);
}