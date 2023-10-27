export function maxOperations(nums: number[], k: number): number {
  let i = 0;
  let j = nums.length - 1;
  let result = 0;

  nums.sort((a,b) => a - b);

  while (i < j) {
    const sum = nums[i] + nums[j];

    if (sum == k) {
      result++;
      i++;
      j--;
    } else if (sum > k) {
      j--;
    } else {
      i++;
    }
  }

  return result;
}
