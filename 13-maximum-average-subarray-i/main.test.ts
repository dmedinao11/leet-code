import { assertEquals } from 'https://deno.land/std@0.189.0/testing/asserts.ts'

Deno.test('All tests', () => {
    assertEquals(findMaxAverage([1, 12, -5, -6, 50, 3], 4), 12.75)
    assertEquals(findMaxAverage([5], 1), 5)
})