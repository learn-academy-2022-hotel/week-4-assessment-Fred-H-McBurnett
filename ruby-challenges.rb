# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# Psuedo-code
# 1.  Take given input values of num1, num2, and num3
# 2.  Define the function is_even
# 3.  Uses the modulo method on each of the values given to determine its remainder
# 4.  If the modulo is 1, output that the given value is odd
# 5.  If the modulo is 0, output that the given value is even
# 6. Test each of the following values given to verify correct output



num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def is_even(num)
    if (num % 2 == 0)
        p "#{num} is even."
    else p "#{num} is odd."    
    end    
end

is_even(7)
# output: '7 is odd.'
is_even(12)
# output: '12 is even.'
is_even(221)
# output: '221 is odd.'


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Psuedo-code
# 1. Create a method called vowels_out
# 2. Take given input values of beatles_album1, beatles_album2, and beatles_album3
# 3. Use the .sub method to remove all of the vowels in each given string
# 4. Test each of the given values to verify correct output, with vowels removed from each

# def vowels_out(album)
#     album.sub(/[aeiou]/, '')
#         p "#{album}"

# This is my favorite solution.
def vowels_out(string)
    result = string.gsub(/[aeiou]/i, '')
    p "#{result}"
end

vowels_out(beatles_album1)
# output: "Rbbr Sl"
vowels_out(beatles_album2)
# output: "Sgt Pppr"
vowels_out(beatles_album3)
# output: "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.


palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Psuedo-code 
# 1. Create a method called pal_test
# 2. Using .upcase, convert the entire string into upcase to compare the initial and reversed strings
# 2. Using the given values for palindrome_tester1, palindrome_tester2, and palindrome_tester3
# 3. Using the method pal_test, test if the values given are palindromes
# 4. If the word is a palingdrome, return (value) is a palindrome.
# 5. If the word is not a palingdrome, return (value) is not a palindrome.
# 6. Test each of the given values to verify status


def pal_test(string)
    if string.upcase == string.upcase.reverse
        p "#{string} is a palindrome."
    else p "#{string} is not a palindrome."
    end    
end

pal_test(palindrome_tester1)
# output: "Racecar is a palindrome."
pal_test(palindrome_tester2)
# output: "LEARN is not a palindrome."
pal_test(palindrome_tester3)
# output: "Rotator is a palindrome."