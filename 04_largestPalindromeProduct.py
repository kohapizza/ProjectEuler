def getLargestPalindromeProduct():
    max = 0
    for i in range(100, 1000):
        for j in range(i, 1000):
            if isPalindrome(i * j) and i * j > max:
                max = i * j
    return max

def isPalindrome(n):
    s = str(n)
    count = len(s)
    for i in range(count // 2):
        if s[i] != s[count - 1 - i]:
            return False
    return True

print(getLargestPalindromeProduct())