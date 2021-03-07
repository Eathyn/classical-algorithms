/**
 * Time Complexity
 *  worst case: O(n^2) (descending order)
 *  average case: O(n^2)
 *  best case: O(n) (ascending order)
 *
 * Space Complexity: O(1)
 *
 * Stable: Yes
 * */

export function insertionSort(arr) {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    const n = arr[i]
    let j = i - 1
    while (j >= 0 && n < arr[j]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      j--
    }
  }
}
