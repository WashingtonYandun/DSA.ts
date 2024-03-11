import { addTwoNumbers, ListNode } from "./AddTwoNumbers";

describe(">> 2. Add Two Numbers", () => {
    test("Adding two empty lists", () => {
        // null
        const l1 = null;

        // null
        const l2 = null;

        // null
        const expected = null;
        expect(addTwoNumbers(l1, l2)).toEqual(expected);
    });

    test("Adding a single-digit number to an empty list", () => {
        // null
        const l1 = null;

        // 3
        const l2 = new ListNode(3);

        // 3
        const expected = new ListNode(3);
        expect(addTwoNumbers(l1, l2)).toEqual(expected);
    });

    test("Adding two single-digit numbers", () => {
        // 2
        const l1 = new ListNode(2);

        //3
        const l2 = new ListNode(3);

        // 2 + 3 = 5 => 5
        const expected = new ListNode(5);
        expect(addTwoNumbers(l1, l2)).toEqual(expected);
    });

    test("Adding two multi-digit numbers", () => {
        // 342
        const l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);

        // 465
        const l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);

        // 342 + 465 = 807 => 708
        const expected = new ListNode(7);
        expected.next = new ListNode(0);
        expected.next.next = new ListNode(8);
        expect(addTwoNumbers(l1, l2)).toEqual(expected);
    });

    test("Adding two numbers with different lengths", () => {
        // 99
        const l1 = new ListNode(9);
        l1.next = new ListNode(9);

        // 1
        const l2 = new ListNode(1);

        // 99 + 1 = 100 => 001
        const expected = new ListNode(0);
        expected.next = new ListNode(0);
        expected.next.next = new ListNode(1);

        expect(addTwoNumbers(l1, l2)).toEqual(expected);
    });
});
