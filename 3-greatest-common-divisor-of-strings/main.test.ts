import { assertEquals } from "https://deno.land/std@0.189.0/testing/asserts.ts";
import { gcdOfStrings } from "./main.ts";

Deno.test("All tests", () => {
  assertEquals(gcdOfStrings("ABCABC", "ABC"), "ABC");
  assertEquals(gcdOfStrings("ABCABCABCABCABC", "ABCABC"), "ABC");
  assertEquals(gcdOfStrings("ABCABCABCABCABCABC", "ABCABC"), "ABCABC");
  assertEquals(gcdOfStrings("ABABAB", "ABAB"), "AB");
  assertEquals(gcdOfStrings("LEET", "CODE"), "");
});
