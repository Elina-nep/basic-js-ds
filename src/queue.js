const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  que = null;
  getUnderlyingList() {
    return this.que;
  }

  enqueue(newEl) {
    if (this.que === null) {
      this.que = new ListNode(newEl);
    } else {
      var currentQue = this.que;
      while (true) {
        if (currentQue.next === null) {
          break;
        }
        currentQue = currentQue.next;
      }
      currentQue.next = new ListNode(newEl);
    }
  }

  dequeue() {
    var deleted = this.que.value;
    this.que.value = this.que.next.value;
    this.que.next = this.que.next.next;
    return deleted;
  }
}

module.exports = {
  Queue,
};
