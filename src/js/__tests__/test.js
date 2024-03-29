import getHealth from "../app";

test.each([
  [90, "healthy"],
  [45, "wounded"],
  [10, "critical"],
  [-10, 'health value is negative']
])(`testing health %s level`, (level, expected) => {
  const result = getHealth({health: level});
  expect(result).toBe(expected);
});