const numbers = "0123456789"

export function decodeString(s: string): string {
    const stack: string[] = []
    for (const char of s) {
        if (char != "]") {
            stack.push(char)
            continue
        }

        let toRepeat = ""
        while (stack.at(-1) != "[") {
            toRepeat = stack.pop() + toRepeat
        }

        stack.pop()

        let numberString = ""
        while (numbers.includes(stack.at(-1) as string)) {
            numberString = stack.pop() + numberString
        }

        let number = Number.parseInt(numberString);
        toRepeat = toRepeat.repeat(number)

        stack.push(...toRepeat)
    }
    return stack.join("")
}