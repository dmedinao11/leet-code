export function maxArea(height: number[]): number {
  let i = 0;
  let j = height.length - 1;
  let result = 0;

  while (i !== j) {
    const min = Math.min(height[i], height[j]);
    const area = min * (j - i);

    result = area > result ? area : result;

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return result;
}