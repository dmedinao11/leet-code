import {assertEquals} from 'https://deno.land/std@0.189.0/testing/asserts.ts'
import { maxArea } from './main.ts'

Deno.test('All tests', () => {
    assertEquals(maxArea([1,8,6,2,5,4,8,3,7]), 49)
    assertEquals(maxArea([1,1]), 1)
    assertEquals(maxArea([1,2,4,3]), 4)
})