import { assertEquals } from "https://deno.land/std@0.189.0/testing/asserts.ts";
import { compress } from "./main.ts";

Deno.test("All tests", () => {
  assertEquals(compress(["a", "a", "b", "b", "c", "c", "c", "d"]), 7);
  assertEquals(
    compress([
      "a",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "c",
    ]),
    5,
  );
  assertEquals(compress(["a", "b", "c"]), 3);
  assertEquals(compress(["a", "a", "b", "b", "c", "c", "c"]), 6);
  assertEquals(compress(["a"]), 1);
  assertEquals(
    compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]),
    4,
  );
});
