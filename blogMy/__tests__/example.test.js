import { test, expect } from '@jest/globals'

function pow (a, b) {
    return a ** b
}

function calcSumArr(array) {
        let sum = 0
        for (const item of array) {
            if (typeof item !== 'number') {
                return null
            } else {
                sum += item
            }
        }
        return sum
}

function getSum(lastNumber) {
    let firstNumber = 1
    let sum = 0
    while (firstNumber <= lastNumber) {
        sum += firstNumber
        firstNumber++
    }
    return sum
}

function trimString(str, strFirst, strLast) {
    const strAll = str.slice(strFirst, strLast)
    return strAll
}

function getHistory(stringHistory) {
    const history = stringHistory.split('')
        .map((bukva, i) => (bukva = bukva.toLowerCase().repeat(i + 1)) && bukva.charAt(0).toUpperCase() + bukva.slice(1))
        .join('-')
    return history
}

function chacolate(n, m) {
    let i = n
    let nadlom = 0
    while (i > 1) {
        nadlom += 1
        i--
    }
    let w = m
    while (w > 1) {
        nadlom += 1
        w--
    }
    return nadlom
}

function getSumNumbers(sumNumbers) {
    let numbers = 0
    let quantity = sumNumbers.length
    let i = 0
    while (i < quantity) {
        numbers += +sumNumbers.charAt(i)
        i++
    }
    return numbers
}

test('test function pow', () => {
    expect(pow(2, 3)).toBe(8)
    expect(pow(3, 3)).toBe(27)
    expect(pow(2, -2)).toBe(0.25)
})

test('test function calcSumArr', () => {
    expect(calcSumArr([1, 2, 3])).toBe(6)
    expect(calcSumArr([1, 2, 3, 4, 5])).toBe(15)
    expect(calcSumArr([1, 2, 'три'])).toBeNull()
})

test('test function getSum', () => {
    expect(getSum(100)).toBe(5050)
    expect(getSum(10)).toBe(55)
    expect(getSum(0)).toBe(0)
})

test('test function trimString', () => {
    expect(trimString('Hello world', 0, 5)).toBe('Hello')
    expect(trimString('Hello world', 6, 11)).toBe('world')
    expect(trimString('Hello world', 0, 11)).toBe('Hello world')
})

test('test function getHistory', () => {
    expect(getHistory('abcd')).toBe('A-Bb-Ccc-Dddd')
    expect(getHistory('RqaEzty')).toBe('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy')
    expect(getHistory('cwAt')).toBe('C-Ww-Aaa-Tttt')
})

test('test function chacolate', () => {
    expect(chacolate(2, 1)).toBe(1)
    expect(chacolate(3, 1)).toBe(2)
    expect(chacolate(0, 0)).toBe(0)
    expect(chacolate(1, 1)).toBe(0)
})

test('test function getSumNumbers', () => {
    expect(getSumNumbers('123')).toBe(6)
    expect(getSumNumbers('1234')).toBe(10)
    expect(getSumNumbers('12345')).toBe(15)
})

