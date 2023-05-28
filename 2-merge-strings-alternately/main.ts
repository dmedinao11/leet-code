export function mergeAlternately(word1: string, word2: string): string {
  let result = "";
  const n = word1.length > word2.length ? word1.length : word2.length;

  for (let i = 0; i < n; i++) {
    if (i < word1.length) {
      result += word1[i];
    }

    if (i < word2.length) {
      result += word2[i];
    }
  }

  return result;
}
