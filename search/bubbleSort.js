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

export function bubbleSort(arr) {
  const n = arr.length - 1

  for (let i = n; i > 0; i--) {
    // add isSorted judgement condition to create O(n) time complexity when input is ascending order (best case)
    let isSorted = true

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
        isSorted = false
      }
    }

    if (isSorted) {
      break
    }
  }
}
