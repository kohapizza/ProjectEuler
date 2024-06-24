import math

def getSolutions(num):
    count = 0

    for a in range(1, num-2, 1):
        for b in range(a, num-2, 1):
            c = num - a - b
            if math.sqrt(a**2 + b**2) == int(math.sqrt(a**2 + b**2)) and c == math.sqrt(a**2 + b**2):
                count += 1
                # print("a: ", a, " b: ", b, " c: ", c)

    return count

# test
print(getSolutions(120))

def getMaximumSolutions(perimeterLimit):
    maxCountPerimeter = 1
    maxCount = 1

    for perimeter in range(12, perimeterLimit+1, 1):
        if maxCount < getSolutions(perimeter):
            maxCount = getSolutions(perimeter)
            maxCountPerimeter = perimeter
            print(maxCountPerimeter)

    return maxCountPerimeter

# answer
print(getMaximumSolutions(1000)) # -> 840