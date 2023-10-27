export function increasingTriplet(nums: number[]): boolean {
  let smallest = Number.MAX_SAFE_INTEGER;
  let biggest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];

    if (cur <= smallest) {
      smallest = cur;
      continue;
    }

    if (cur <= biggest) {
      biggest = cur;
      continue;
    }

    return true;
  }

  return false;
}
