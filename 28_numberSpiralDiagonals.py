# What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?

# スパイラルの右下の数を求める
def getLowerRight(lengthOfSide):
    if lengthOfSide == 1:
        return 1
    else:
        return getLowerRight(lengthOfSide-2) + (lengthOfSide-3)*3 + lengthOfSide-1

# print(getLowerRight(3)) # -> 3
# print(getLowerRight(5)) # -> 13 

# 1スパイラルの4隅の合計
def getSpiralSum(lengthOfSide):
    lowerRight = getLowerRight(lengthOfSide)
    return lowerRight*4 + (lengthOfSide-1)*6

# print(getSpiralSum(3)) # -> 24
# print(getSpiralSum(5)) # -> 76

# スパイラル全体の4隅の合計
def getAllSpiralSum(lengthOfSide):
    if lengthOfSide == 1:
        return 1
    else:
        sum = 1
        for lengthOfSide in range(3, lengthOfSide+1, 2):
            sum += getSpiralSum(lengthOfSide)
        return sum

print(getAllSpiralSum(1)) # -> 1
print(getAllSpiralSum(3)) # -> 25
print(getAllSpiralSum(5)) # -> 101
print(getAllSpiralSum(1001)) # -> 669171001