# Find the sum of the digits in the number 100!

# n!を求める
def getFactorialNum(n):
    if n==1:
        return 1
    else:
        return n*getFactorialNum(n-1)
    
print(getFactorialNum(5)) # -> 120

# n!の桁の合計を求める
def getSumOfDigits(n):
    factorialN = getFactorialNum(n)
    stringN = str(factorialN)

    sum = 0

    for digit in stringN:
        sum += int(digit)
    
    return sum


print(getSumOfDigits(5))
print(getSumOfDigits(100)) # -> answer 648