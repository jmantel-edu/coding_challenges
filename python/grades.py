# Exercise 4B: Grades
# Print the names and grades of students in a dictionary.

grades = {
    "Aaron": 89,
    "Olivia": 79,
    "Noah": 83,
    "Emma": 29,
    "Charlotte": 74,
    "Theo": 95,
    "Sophia": 92,
    "Henry": 88,
    "Ava": 75
}

for i in grades.keys():
    print(f"{i}: {grades[i]}")