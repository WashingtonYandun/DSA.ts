import { isPalindrome } from "./PalindromeNumber";

describe(">> 9. Palindrome Number", () => {
    test("Negative number should return false", () => {
        const input = -123;
        const expected = false;
        expect(isPalindrome(input)).toEqual(expected);
    });

    test("Single digit number should return true", () => {
        const input = 7;
        const expected = true;
        expect(isPalindrome(input)).toEqual(expected);
    });

    test("Palindrome number should return true", () => {
        const input = 121;
        const expected = true;
        expect(isPalindrome(input)).toEqual(expected);
    });

    test("Non-palindrome number should return false", () => {
        const input = 12345;
        const expected = false;
        expect(isPalindrome(input)).toEqual(expected);
    });
});
