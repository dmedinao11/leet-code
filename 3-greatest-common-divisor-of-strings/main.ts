export function gcdOfStrings(str1: string, str2: string): string {
  const lenghtsGCD = gcd(str1.length, str2.length);

  const strDivisor = str1.slice(0, lenghtsGCD);

  const areBothDivisiblesByStrDivisor = isStringDivisibleBy(str1, strDivisor) &&
    isStringDivisibleBy(str2, strDivisor);

  return areBothDivisiblesByStrDivisor ? strDivisor : "";
}

function gcd(a: number, b: number): number {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

function isStringDivisibleBy(a: string, b: string): boolean {
  return a.split(b).filter((c) => c != "").length === 0;
}
