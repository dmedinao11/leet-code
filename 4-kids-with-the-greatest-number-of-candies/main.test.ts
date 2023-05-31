import { assertEquals } from "https://deno.land/std@0.189.0/testing/asserts.ts";
import { kidsWithCandies } from "./main.ts";

Deno.test("All tests", () => {
  assertEquals(kidsWithCandies([2, 3, 5, 1, 3], 3), [
    true,
    true,
    true,
    false,
    true,
  ]);
  assertEquals(kidsWithCandies([4, 2, 1, 1, 2], 1), [
    true,
    false,
    false,
    false,
    false,
  ]);
  assertEquals(kidsWithCandies([12, 1, 12], 10), [true, false, true]);
});
