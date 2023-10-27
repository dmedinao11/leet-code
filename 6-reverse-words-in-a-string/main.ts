export function reverseWords(s: string): string {
  return s.split(" ").filter((c) => c !== "").reverse().join(" ");
}
