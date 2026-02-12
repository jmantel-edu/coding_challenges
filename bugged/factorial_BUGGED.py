# Exercise 2C: Factorial
# Calculate the factorial of a number n using any loop.

from math import prod

def factorial(n: int):
    numbers = [i for i in range(n, 1, -1)]
    return sum(numbers)

print(factorial(int(input("Enter an integer: "))))