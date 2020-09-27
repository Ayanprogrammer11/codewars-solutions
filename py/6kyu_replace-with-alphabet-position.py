"""
  Welcome.

  In this kata you are required to, given a string, replace every letter with its position in the alphabet.

  If anything in the text isn't a letter, ignore it and don't return it.

  "a" = 1, "b" = 2, etc.

  Example
  alphabet_position("The sunset sets at twelve o' clock.")
  Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
"""

import string

def alphabet_position(text):
    alphabet = list(string.ascii_lowercase)
    word_str = ''.join(word for word in text.lower() if word.isalnum())
    result = []
    
    for letter in list(word_str):
        result.append(alphabet.index(letter))
        
    if len(result) == 0:
        return ''
        
    return ' '.join(str(x+1) for x in result)
