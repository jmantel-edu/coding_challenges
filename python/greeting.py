# Exercise 3A: Greeting
# Greet a user by their name.

def greeting(name: str):
    return f"Hello, {name}!"

print(greeting(input("What's your name?: ")))