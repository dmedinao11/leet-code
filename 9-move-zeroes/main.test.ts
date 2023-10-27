import { assertEquals } from "https://deno.land/std@0.189.0/testing/asserts.ts";
import { moveZeroes } from "./main.ts";

Deno.test("All tests", () => {
  let a = [0, 1, 0, 3, 12];
  moveZeroes(a);
  assertEquals(a, [1, 3, 12, 0, 0]);

  a = [0];
  moveZeroes(a);
  assertEquals(a, [0]);

  a = [0, 1, 0, 2, 0, 3];
  moveZeroes(a);
  assertEquals(a, [1, 2, 3, 0, 0, 0]);

  a = [0, 0, 0, 0, 0, 3];
  moveZeroes(a);
  assertEquals(a, [3, 0, 0, 0, 0, 0]);

  a = [0, 3];
  moveZeroes(a);
  assertEquals(a, [3, 0]);

  a = [0, 0, 3, 0, 0, 0, 3];
  moveZeroes(a);
  assertEquals(a, [3, 3, 0, 0, 0, 0, 0]);
});
