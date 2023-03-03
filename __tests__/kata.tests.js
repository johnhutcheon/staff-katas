const { findClosingParenthesis } = require("../kata");

describe("the function findClosingParenthesis", () => {
  test("should return -1 when passed an empty string and no second arg", () => {
    const testStr = "";
    const expected = findClosingParenthesis(testStr);
    expect(expected).toEqual(-1);
  });
  test("should return -1 when only a string is passed with no second arg", () => {
    const testStr = "hello";
    const expected = findClosingParenthesis(testStr);
    expect(expected).toEqual(-1);
  });
  test("should return 6 when passed '(hello)' with number as 1", () => {
    const testStr = "(hello)";
    const testNum = 1;
    const expected = findClosingParenthesis(testStr, testNum);
    expect(expected).toEqual(6);
  });
  test("should return correct answer when passed two parenthesis", () => {
    const testStr = "Hello, (world). (Something Else).";
    const testNum = 2;

    const expected = findClosingParenthesis(testStr, testNum);
    expect(expected).toEqual(31);
  });
  test("should return correct answer when passed multiple parenthesis", () => {
    const testStr =
      "Hello, (world, (foo) bar (something) else), foo (bar) cat,";
    const testNum = 3;
    const expected = findClosingParenthesis(testStr, testNum);
    expect(expected).toEqual(35);
  });
  test.only("should return correct answer when passed EVEN MORE parenthesis", () => {
    const testStr = "Hello, (world, (foo) bar (something) else), foo (bar) cat";
    const testNum = 1;
    const expected = findClosingParenthesis(testStr, testNum);
    expect(expected).toEqual(41);
  });
});
