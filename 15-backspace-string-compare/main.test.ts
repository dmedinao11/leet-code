import { assertEquals } from 'https://deno.land/std@0.189.0/testing/asserts.ts'
import { backspaceCompare } from './main.ts'

Deno.test('All tests', () => {
    assertEquals(backspaceCompare("ab#c", "ad#c"), true)
    assertEquals(backspaceCompare("ab##", "c#d#"), true)
    assertEquals(backspaceCompare("a#c", "b"), false)
})