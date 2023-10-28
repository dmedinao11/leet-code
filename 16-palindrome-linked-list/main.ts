class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function isPalindrome(head: ListNode | null): boolean {
    const stack: number[] = []
    let currentNode: ListNode | null = head

    while (currentNode != null) {
        stack.push(currentNode.val)
        currentNode = currentNode.next
    }

    currentNode = head

    while (currentNode != null) {
        const stackValue = stack.pop()
        if (currentNode?.val != stackValue) {
            return false
        }
        currentNode = currentNode.next
    }

    return true
}

function toLinkedList(arr: number[]): ListNode {
    let head = new ListNode(arr[0], null)

    for (let i = 1; i < arr.length; i++) {
        const node = new ListNode(arr[i], head)
        head = node
    }

    return head
}

console.log(isPalindrome(toLinkedList([1, 2, 2, 1])) == true);
console.log(isPalindrome(toLinkedList([1, 2])) == false);
console.log(isPalindrome(toLinkedList([1, 0, 0])) == false);
console.log(isPalindrome(toLinkedList([1])) == true);