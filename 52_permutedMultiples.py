from collections import Counter

# 2倍で成り立つか確かめる
def getTheSameDigit(num, n):
    numNtimes = str(int(num)*n)
    # 各桁の出現回数をカウント
    return Counter(num) == Counter(numNtimes)


# test
print(getTheSameDigit("125874", 2)) # -> True
print(getTheSameDigit("11", 2)) # -> False
print(getTheSameDigit("99", 2)) # -> False

# 2~6倍で成り立つか調べる
def getTheSameDigits(num):
    isTheSameDigits = False

    for i in range(2, 7):
        if getTheSameDigit(num, i):
            isTheSameDigits = True
        else:
            isTheSameDigits = False
            return isTheSameDigits
    
    return isTheSameDigits

# test
print(getTheSameDigits("125874")) # -> False
print(getTheSameDigits("99")) # -> False

# 
def getSmallestPositiveInteger():
    positiveNum = 0
    i = 1

    while(True):
        num = str(i)
        if getTheSameDigits(num):
            positiveNum = i
            return i
        else:
            i += 1

print(getSmallestPositiveInteger()) # -> 142857
