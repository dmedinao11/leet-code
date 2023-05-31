export function kidsWithCandies(
  candies: number[],
  extraCandies: number,
): boolean[] {
  const gratestNumber = getGratestNumber(candies);
  return candies.map((n) => (n + extraCandies) >= gratestNumber);
}

function getGratestNumber(numbers: number[]): number {
  return numbers.reduce((acc, a) => a > acc ? a : acc, 0);
}
