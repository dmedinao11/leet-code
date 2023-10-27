/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
  if (nums.length <= 1) return;

  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      continue;
    }

    swap(nums, i, j);
    j++;
  }
}

function swap(arr: number[], i: number, j: number) {
  const aux = arr[i];
  arr[i] = arr[j];
  arr[j] = aux;
}
