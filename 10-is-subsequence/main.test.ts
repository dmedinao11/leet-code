import {assertEquals} from 'https://deno.land/std@0.189.0/testing/asserts.ts'
import { isSubsequence } from './main.ts'

Deno.test('All tests', () => {
    assertEquals(isSubsequence("abc", "ahbgdc"), true)
    assertEquals(isSubsequence("axc", "ahbgdc"), false)
    assertEquals(isSubsequence("ace", "abcde"), true)
    assertEquals(isSubsequence("aec", "abcde"), false)
})