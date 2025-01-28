# calculator.py

from math_operations import add, subtract, multiply, divide

def calculate(operation, a, b):
    """Performs a calculation based on the operation provided."""
    if operation == 'add':
        return add(a, b)
    elif operation == 'subtract':
        return subtract(a, b)
    elif operation == 'multiply':
        return multiply(a, b)
    elif operation == 'divide':
        return divide(a, b)
    else:
        raise ValueError("Invalid operation!")

# Example usage
if __name__ == "__main__":
    result = calculate('add', 10, 5)
    print(f"Addition Result: {result}")

    result = calculate('subtract', 10, 5)
    print(f"Subtraction Result: {result}")

    result = calculate('multiply', 10, 5)
    print(f"Multiplication Result: {result}")

    result = calculate('divide', 10, 5)
    print(f"Division Result: {result}")