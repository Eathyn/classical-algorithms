/**
 * Time Complexity
 *  worst case: O(n^2)
 *  average case: O(n^2)
 *  best case: O(n^2)
 *
 * Space Complexity: O(1)
 *
 * Stable: Yes
 * */

export function selectionSort(arr) {
  const n = arr.length - 1

  for (let i = 0; i < n; i++) {
    let minIndex = i
    for (let j = i; j < n; j++) {
      if (arr[j + 1] < arr[minIndex]) {
        minIndex = j + 1
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
}
