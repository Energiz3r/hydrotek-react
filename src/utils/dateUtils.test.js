import { getFriendlyFromTimestamp } from "./dateUtils.ts";

test("get friendly date from a timestamp", () => {
  expect(getFriendlyFromTimestamp(1519211809934)).toBe("2018-02-21 22:16:49");
});
