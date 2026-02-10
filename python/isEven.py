# Exercise 3B: Is Even
# Write a function that checks if a number is even or odd.

def isEven(n):
    return "Even" if int(n) % 2 != 1 else "Odd"

print(isEven(input("Enter an integer: ")))