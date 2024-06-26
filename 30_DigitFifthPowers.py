def getNumOfSumOfFifthPowers():
    sumArr = []
    sumOfFifthPower = 0
    for sum in range(2, 354925):
        sumOfPower = 0
        for i in str(sum):
            sumOfPower += int(i)**5

        if sumOfPower == sum:
            sumArr.append(sum)
    
    for element in sumArr:
        sumOfFifthPower += element

    print(sumArr)
    return sumOfFifthPower

print(getNumOfSumOfFifthPowers()) # -> 443839