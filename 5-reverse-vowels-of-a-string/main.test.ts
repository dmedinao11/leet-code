import {assertEquals} from 'https://deno.land/std@0.189.0/testing/asserts.ts'
import { reverseVowels } from './main.ts'

Deno.test('All tests', () => {
    assertEquals(reverseVowels("hello"), "holle")
    assertEquals(reverseVowels("leotcede"), "leetcode")
})