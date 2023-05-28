import { assertEquals } from "https://deno.land/std@0.189.0/testing/asserts.ts";
import { mergeAlternately } from "./main.ts";

Deno.test("All tests", () => {
  assertEquals(mergeAlternately("abc", "pqr"), "apbqcr");
  assertEquals(mergeAlternately("ab", "pqrs"), "apbqrs");
  assertEquals(mergeAlternately("abcd", "pq"), "apbqcd");
});
