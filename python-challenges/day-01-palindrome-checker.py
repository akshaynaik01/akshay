"""
Day 1: Palindrome Checker

Problem: Check if a given string is a palindrome (reads the same forwards and backwards).

Difficulty: Easy
Topics: Strings, Two Pointers
"""

# Solution 1: Simple approach using string reversal
def is_palindrome_v1(s):
    """
    Check if string is a palindrome by comparing with reversed string.
    Ignores spaces and case sensitivity.
    """
    # Remove spaces and convert to lowercase
    cleaned = ''.join(s.split()).lower()
    # Compare with reverse
    return cleaned == cleaned[::-1]


# Solution 2: Two-pointer approach
def is_palindrome_v2(s):
    """
    Check if string is a palindrome using two pointers.
    More efficient as it stops early if mismatch found.
    """
    # Remove spaces and convert to lowercase
    cleaned = ''.join(s.split()).lower()
    
    left, right = 0, len(cleaned) - 1
    while left < right:
        if cleaned[left] != cleaned[right]:
            return False
        left += 1
        right -= 1
    return True


# Solution 3: Recursive approach
def is_palindrome_v3(s):
    """
    Check if string is a palindrome using recursion.
    """
    cleaned = ''.join(s.split()).lower()
    
    def helper(left, right):
        if left >= right:
            return True
        if cleaned[left] != cleaned[right]:
            return False
        return helper(left + 1, right - 1)
    
    return helper(0, len(cleaned) - 1)


# Test cases
if __name__ == "__main__":
    test_cases = [
        ("A man a plan a canal Panama", True),
        ("hello", False),
        ("racecar", True),
        ("12321", True),
        ("12345", False),
        ("a", True),
        ("ab", False),
        ("A1b B1a", True),
    ]
    
    print("Testing is_palindrome_v1 (String Reversal):")
    for test_str, expected in test_cases:
        result = is_palindrome_v1(test_str)
        status = "✓" if result == expected else "✗"
        print(f"{status} '{test_str}' -> {result} (Expected: {expected})")
    
    print("\nTesting is_palindrome_v2 (Two Pointers):")
    for test_str, expected in test_cases:
        result = is_palindrome_v2(test_str)
        status = "✓" if result == expected else "✗"
        print(f"{status} '{test_str}' -> {result} (Expected: {expected})")
    
    print("\nTesting is_palindrome_v3 (Recursive):")
    for test_str, expected in test_cases:
        result = is_palindrome_v3(test_str)
        status = "✓" if result == expected else "✗"
        print(f"{status} '{test_str}' -> {result} (Expected: {expected})")


# Challenge:
# 1. Extend the solution to handle special characters and punctuation
# 2. Find the time and space complexity of each approach
# 3. Which solution is most efficient and why?
