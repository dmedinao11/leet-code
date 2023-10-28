export function backspaceCompare(s: string, t: string): boolean {
    const sStack: string[] = []

    for (const char of s) {
        if (char != "#") {
            sStack.push(char)
            continue
        }

        if (!sStack.length) {
            continue
        }

        sStack.pop()
    }

    const tStack: string[] = []

    for (const char of t) {
        if (char != "#") {
            tStack.push(char)
            continue
        }

        if (!tStack.length) {
            continue
        }

        tStack.pop()
    }


    return JSON.stringify(sStack) == JSON.stringify(tStack)
}