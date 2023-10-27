import { assertEquals } from "https://deno.land/std@0.189.0/testing/asserts.ts";
import { increasingTriplet } from "./main.ts";

Deno.test("All tests", () => {
  assertEquals(increasingTriplet([1, 2, 3, 4, 5]), true);
  assertEquals(increasingTriplet([5, 4, 3, 2, 1]), false);
  assertEquals(increasingTriplet([2, 1, 5, 0, 4, 6]), true);
  assertEquals(increasingTriplet([20, 100, 10, 12, 5, 13]), true);
  //20,20,10,10,5
  //13,13,13,13,13
});
