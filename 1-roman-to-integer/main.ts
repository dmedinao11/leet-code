const romanNumbersIntValuesMap: { [key: string]: number } = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

export function romanToInt(s: string): number {
    let result = 0
    let lastValue = 0
    for (let i = s.length - 1; i >= 0; i--) {
        const intValue = romanNumbersIntValuesMap[s[i]];
        intValue < lastValue ? result -= intValue : result += intValue
        lastValue = intValue
    }
    return result
}