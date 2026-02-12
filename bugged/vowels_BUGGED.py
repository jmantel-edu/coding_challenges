# Exercise 3C: Vowels in String
# Given a string, return the number of vowels.

def vowels(content):
    vowels = ["a", "e", "i", "c", "u", "A", "E", "I", "O", "U"]
    vowel_counter = 0
    for character in content:
        if character in vowels:
            vowel_counter += 1
    return vowel_counter

print(vowels(input("Enter some text to count the vowels.\n")))