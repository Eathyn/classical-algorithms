import { bubbleSort } from '../search/bubbleSort'

describe('test bubble sort algorithm', () => {
  test('[5, 4, 3, 2, 1] test case', () => {
    const arr = [5, 4, 3, 2, 1]
    bubbleSort(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })
  test('[1, 2, 3, 4, 5] test case', () => {
    const arr = [1, 2, 3, 4, 5]
    bubbleSort(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })
  test('[2, 1, 3, 5, 4] test case', () => {
    const arr = [2, 1, 3, 5, 4]
    bubbleSort(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })
})
