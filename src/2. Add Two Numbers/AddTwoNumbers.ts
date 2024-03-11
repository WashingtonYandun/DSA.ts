// 2. Add Two Numbers
/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    if (l1 === null && l2 === null) {
        return null;
    }

    let num1Str: string = "";
    let num2Str: string = "";

    while (l1) {
        num1Str = l1.val + num1Str;
        l1 = l1.next;
    }

    while (l2) {
        num2Str = l2.val + num2Str;
        l2 = l2.next;
    }

    let sum: string = (BigInt(num1Str) + BigInt(num2Str)).toString();

    let dummyHead: ListNode = new ListNode();
    let current: ListNode = dummyHead;

    for (let i = sum.length - 1; i >= 0; i--) {
        current.next = new ListNode(parseInt(sum[i]));
        current = current.next;
    }

    return dummyHead.next;
}

export { addTwoNumbers, ListNode };
