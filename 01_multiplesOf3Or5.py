def getMultiplesOfSum(limit):
    multiples = [x for x in range(limit) if x % 3 == 0 or x % 5 == 0]
    return sum(multiples)

print(getMultiplesOfSum(1000))
