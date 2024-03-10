import { twoSum } from "./TwoSum";

describe(">> 1. Two Sum", () => {
    test("Empty Array should return an empty array", () => {
        const nums: number[] = [];
        const target = 9;
        const expected: number[] = [];
        expect(twoSum(nums, target)).toEqual(expected);
    });

    test("No valid solution should return an empty array", () => {
        const nums: number[] = [4, 5, 6];
        const target = 100;
        const expected: number[] = [];
        expect(twoSum(nums, target)).toEqual(expected);
    });

    test("If exists a valid solution should return an array of 2 numbers", () => {
        const nums: number[] = [1, 2, 4];
        const target = 6;
        const expected: number[] = [1, 2];
        expect(twoSum(nums, target)).toEqual(expected);
    });
});
