"""
  You have an array of numbers.
  Your task is to sort ascending odd numbers but even numbers must be on their places.

  Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

  Example
  sort_array([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
"""

def sort_array(source_array):
    lst = []
    odds = sorted([n for n in source_array if n % 2])
    
    for n in source_array:
        lst.append(odds.pop(0)) if n % 2 else lst.append(n)
    
    return lst
