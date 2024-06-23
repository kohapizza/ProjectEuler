# n番目のフィボナッチ数
def fibonacci(n, memo={}):
    if n in memo:
        return memo[n]
    if n == 1 or n == 2: 
        return 1
    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
    # print(memo)
    return memo[n]
    
print(fibonacci(12)) # -> 14

# 最初に1000桁超えるフィボナッチ数を求めて、その順番を求める
def get1000digitIndex():
    memo = {}
    i = 1
    while True:
        if len(str(fibonacci(i, memo))) >= 1000:
            return i
        i += 1
    

print(get1000digitIndex()) # -> 4782