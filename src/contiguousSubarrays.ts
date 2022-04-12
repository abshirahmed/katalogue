/**
 * ## Contiguous Subarrays
 *
 * You are given an array **arr** of **N** integers.
 *
 * For each index **i**, you are required to determine the number of contiguous subarrays that fulfill the following conditions:
 *
 * - The value at index **i** must be the maximum element in the contiguous subarrays, and
 * - These contiguous subarrays must either start from or end on index **i**.
 *
 * _Example:_
 *
 * **arr** = [3, 4, 1, 6, 2]
 *
 * **output** = [1, 3, 1, 5, 1]
 *
 * Explanation:
 *
 * For `arr[0]` which equals 3 - [3] is the only contiguous subarray that starts (or ends) with 3, and the maximum value in this subarray is 3.
 *
 * For `arr[1]` which equals 4 - [4], [3, 4], [4, 1]
 *
 * For `arr[2]` which equals 1 - [1]
 *
 * For `arr[3]` which equals 6 - [6], [6, 2], [1, 6], [4, 1, 6], [3, 4, 1, 6]
 *
 * For `arr[4]` which equals 2 - [2]
 *
 * So, the answer for the above input is [1, 3, 1, 5, 1]
 */
export function contiguousSubarrays(arr: number[]) {
  const N = arr.length;

  const forwardArray = new Array(N).fill(1);
  const reverseArray = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    const currentValue = arr[i];
    for (let j = i + 1; j < N; j++) {
      if (currentValue > arr[j]) forwardArray[i]++;
      else break;
    }
  }

  for (let i = N - 1; i >= 0; i--) {
    const currentValue = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (currentValue > arr[j]) reverseArray[i]++;
      else break;
    }
  }

  return forwardArray.map((value, index) => value + reverseArray[index]);
}
