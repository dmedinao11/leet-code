export function compress(chars: string[]): number {
  if (!chars.length) {
    return 0;
  }

  let repeatedChar = chars[0];
  let repeatedCharIndex = 0;
  let index = 0;

  for (let i = 0; i < chars.length; i++) {
    if (repeatedChar === chars[i]) {
      continue;
    }

    const count = i - repeatedCharIndex;

    const charsToSet = count !== 1 ? repeatedChar + count : repeatedChar;

    for (let j = 0; j < charsToSet.length; j++) {
      chars[index++] = charsToSet[j];
    }

    repeatedChar = chars[i];
    repeatedCharIndex = i;
  }

  const count = chars.length - repeatedCharIndex;

  const charsToSet = count !== 1 ? repeatedChar + count : repeatedChar;

  for (let j = 0; j < charsToSet.length; j++) {
    chars[index++] = charsToSet[j];
  }

  return index;
}

/*
export function compress(chars: string[]): number {
  if (chars.length <= 2) {
    return chars.length;
  }

  let repeatedIndex = 0;
  let repeatedChar = chars[0];
  for (let i = 0; i < chars.length; i++) {
    if (repeatedChar === chars[i]) {
      continue;
    }

    const count = i - repeatedIndex;

    if (count != 1) {
      const charsToSet = count !== 1 ? repeatedChar + count : repeatedChar;

      for (let j = 0; j < charsToSet.length; j++) {
        chars[repeatedIndex++] = charsToSet[j];
      }
    }

    repeatedChar = chars[i];
  }

  const count = chars.length - repeatedIndex;
  if (count != 1) {
    const charsToSet = count !== 1 ? repeatedChar + count : repeatedChar;

    for (let j = 0; j < charsToSet.length; j++) {
      chars[repeatedIndex++] = charsToSet[j];
    }
  }

  return repeatedIndex;
}
*/
