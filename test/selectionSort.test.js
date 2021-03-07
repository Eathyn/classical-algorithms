import { selectionSort } from '../search/selectionSort'

describe('test selection sort algorithm', () => {
  test('[5, 4, 3, 2, 1] test case', () => {
    const arr = [5, 4, 3, 2, 1]
    selectionSort(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })
  test('[1, 2, 3, 4, 5] test case', () => {
    const arr = [1, 2, 3, 4, 5]
    selectionSort(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })
  test('[2, 3, 1, 5, 4] test case', () => {
    const arr = [2, 3, 1, 5, 4]
    selectionSort(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })
})
