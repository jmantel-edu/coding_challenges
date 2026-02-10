# Exercise 4C: Highest Number
# Given a list, find and return the highest number.

numbers = [57, 70, 94, 31, 80, 35, 84, 94, 58, 78, 98, 68, 13, 25, 80, 98, 1, 5, 64, 68]

def highest(n: list): 
    n.sort()
    return n[-1]

print(highest(numbers))