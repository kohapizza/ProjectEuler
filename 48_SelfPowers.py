def getSelfPower(n):
    return n**n

print(getSelfPower(3))

def getSumSelfPower(n):
    sum = 0
    for n in range(1, n+1,1):
        sum += getSelfPower(n)
    return sum

print(getSumSelfPower(1000))