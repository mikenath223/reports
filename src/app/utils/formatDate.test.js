import { formatDate } from "./formatDate";

describe("formatDate", () => {
  it("returns date", () => {
    const date = formatDate("5/18/2022");
    expect(date).toEqual("2022-5-18");
  });
});
