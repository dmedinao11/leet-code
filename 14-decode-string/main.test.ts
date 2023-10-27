import {assertEquals} from 'https://deno.land/std@0.189.0/testing/asserts.ts'
import {decodeString} from "./main.ts";

Deno.test('All tests', () => {
    assertEquals(decodeString("3[a]2[bc]"), "aaabcbc")
    assertEquals(decodeString("3[a2[c]]"), "accaccacc")
    assertEquals(decodeString("2[abc]3[cd]ef"), "abcabccdcdcdef")
})