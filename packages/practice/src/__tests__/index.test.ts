import { helloWorld } from "../index";

describe("index", () => {
  it("success case", () => {
    expect.assertions(1)

    const value = "Hello World!!"
    expect(helloWorld()).toBe(value)
  })
})