// 9. Palindrome Number
/*
Given an integer x, return true if x is a palindrome, and false otherwise.
*/

function isPalindrome(x: number): boolean {
    let numStr: string = x.toString();
    let splittedStr: string[] = numStr.split("");
    let reversedStr: string[] = splittedStr.reverse();
    return numStr === reversedStr.join("");
}

export { isPalindrome };
