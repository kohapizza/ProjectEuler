def getCountsLetter(num):
    oneTonine1digit = {
        '0': 0,
        '1': 3,
        '2': 3,
        '3': 5,
        '4': 4,
        '5': 4,
        '6': 3,
        '7': 5,
        '8': 5,
        '9': 4
    }

    oneTonine2digit = {
        '2': 6,
        '3': 6,
        '4': 5,
        '5': 5,
        '6': 5,
        '7': 7,
        '8': 6,
        '9': 6
    }

    tenTonineTeen = {
        '10': 3,
        '11': 6,
        '12': 6,
        '13': 8,
        '14': 8,
        '15': 7,
        '16': 7,
        '17': 9,
        '18': 8,
        '19': 8
    }

    # 1桁だったら
    if len(str(num)) == 1:
        return oneTonine1digit[str(num)]
    
    # 2桁だったら
    if len(str(num)) == 2: 
        if str(num)[0] == '1':
            return tenTonineTeen[str(num)]
        else:
            return oneTonine2digit[str(num)[0]] + oneTonine1digit[str(num)[1]]
    
    # 3桁だったら
    if len(str(num)) == 3:
        if str(num)[1:] == '00':
            return 7 + oneTonine1digit[str(num)[0]]
        else:
            return getCountsLetter(int((str(num))[1:])) + 10 + oneTonine1digit[(str(num))[0]]
        
    if num == 1000:
        return 11 # 'one thousand'の文字数

# 1~numまでの合計出す
def getSumCounts(num):
    sum = 0

    for i in range(1, num+1):
        sum += getCountsLetter(i)

    return sum

# テスト
print(getCountsLetter(9)) # -> 4
print(getCountsLetter(91)) # -> 9
print(getCountsLetter(100)) # -> 10
print(getSumCounts(5)) # -> 4

# answer
print(getSumCounts(1000)) # -> 21124