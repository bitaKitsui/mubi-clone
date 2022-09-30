import { add } from "./add";

describe("add", () => {
  it("1 + 2 = 3 であること", () => {
    expect(add(1, 2)).toBe(3);
  });
});
