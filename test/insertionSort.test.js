import { insertionSort } from '../search/insertionSort'

describe('test insertion sort', () => {
  test('[5, 4, 3, 2, 1] test case', () => {
    const arr = [5, 4, 3, 2, 1]
    insertionSort(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })
  test('[1, 2, 3, 4, 5] test case', () => {
    const arr = [1, 2, 3, 4, 5]
    insertionSort(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })
  test('[1, 3, 2, 5, 4] test case', () => {
    const arr = [1, 3, 2, 5, 4]
    insertionSort(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })
})
