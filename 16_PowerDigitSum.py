def getDigitSum():
    num = 2**1000
    sum = 0
    for digit in str(num):
        sum += int(digit)
    return sum


print(getDigitSum()) ## 1366