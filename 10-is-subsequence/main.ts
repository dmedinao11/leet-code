export function isSubsequence(s: string, t: string): boolean {
  if (!t.length) {
    return s.length === 0;
  }

  let i = 0;
  let j = 0;

  while (i < t.length) {
    if (t[i] === s[j]) {
      j++;
    }

    if (j === s.length) {
      return true;
    }

    i++;
  }

  return false;
}
