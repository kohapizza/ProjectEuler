# 階乗を求める関数
def getFactorial(n):
    if n == 1 or n == 0:
        return 1
    else:
        return n*getFactorial(n-1)
    
print(getFactorial(9)) # OK

# equal to the sum of the factorial of their digitsかどうか調べる
def isEqual(n):
    str_n = str(n)
    sum = 0

    for digit in str_n:
        sum += getFactorial(int(digit))

    if sum == 1 or sum == 2:
        return False
    elif sum == n:
        return True
    else: 
        return False
    
print(isEqual(145)) # True
print(isEqual(146)) # False
print(isEqual(1)) # Trueだが本問題ではFalse扱いにする
print(isEqual(2)) # Trueだが本問題ではFalse扱いにする

# 上記を満たす数の合計値を求める
def getSum():
    sum = 0

    for num in range(1, 50000000):
        if isEqual(num):
            sum += num

    return sum

print(getSum()) # 40730