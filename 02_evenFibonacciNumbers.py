def getSumOfEvenFibonacciNumbers():
    sum = 0
    i = 1

    while(getFibonacci(i) < 4000000):
        i += 1
        if getFibonacci(i) % 2 == 0:
            sum += getFibonacci(i)

    return sum

# n番目のFibonacci数を取得する関数
def getFibonacci(n):
    if n == 1:
        return 1
    elif n == 2:
        return 2
    elif n == 3:
        return 3
    else:
        return getFibonacci(n-1) + getFibonacci(n-2)

print(getSumOfEvenFibonacciNumbers()) # 4613732