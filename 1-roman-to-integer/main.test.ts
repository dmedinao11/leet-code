import { assertEquals } from "https://deno.land/std@0.189.0/testing/asserts.ts";
import { romanToInt } from "./main.ts";

Deno.test("All tests", () => {
	assertEquals(romanToInt("III"), 3);
	assertEquals(romanToInt("LVIII"), 58);
	assertEquals(romanToInt("MCMXCIV"), 1994);
});
