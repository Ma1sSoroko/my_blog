import { test, expect } from '@jest/globals'
import { buildSchemePagination } from '../src/utils/buildPagination'

test('test function buildSchemePagination', () => {
    expect(buildSchemePagination(1, 4)).toStrictEqual([1, 2, '...', 4])
    expect(buildSchemePagination(1, 10)).toStrictEqual([1, 2, '...', 10])
    expect(buildSchemePagination(2, 10)).toStrictEqual([1, 2, 3, '...', 10])
    expect(buildSchemePagination(3, 10)).toStrictEqual([1, 2, 3, 4, '...', 10])
    expect(buildSchemePagination(4, 10)).toStrictEqual([1, '...', 3, 4, 5, '...', 10])
    expect(buildSchemePagination(5, 10)).toStrictEqual([1, '...', 4, 5, 6, '...', 10])
    expect(buildSchemePagination(1, 1)).toStrictEqual([1])
    expect(buildSchemePagination(1, 2)).toStrictEqual([1, 2])
    expect(buildSchemePagination(1, 3)).toStrictEqual([1, 2, 3])
})
