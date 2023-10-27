import {assertEquals} from 'https://deno.land/std@0.189.0/testing/asserts.ts'
import { reverseWords } from './main.ts'

Deno.test('All tests', () => {
    assertEquals(reverseWords("the sky is blue"), "blue is sky the")
    assertEquals(reverseWords("  hello world  "), "world hello")
    assertEquals(reverseWords("a good   example"), "example good a")
})