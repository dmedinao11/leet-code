export function reverseVowels(s: string): string {
  const allSVowelsReverse = s.split("").reduce(
    (acc, current) => vowels.includes(current) ? current + acc : acc,
    "",
  );

  let vowelsIndex = 0;

  return s.split("").map((sc) =>
    !vowels.includes(sc) ? sc : allSVowelsReverse[vowelsIndex++]
  ).join("");
}

const vowels = "aeiouAEIOU";
