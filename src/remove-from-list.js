const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  if (l === null) {
    return null;
  }
  var currentEl = l;

  while (true) {
    if (currentEl.value == k) {
      currentEl.value = currentEl.next.value;
      currentEl.next = currentEl.next.next;
      continue;
    }

    if (currentEl.next === null) {
      break;
    }

    if (currentEl.next.value === k) {
      if (currentEl.next.next === null) {
        currentEl.next = null;
        break;
      }

      currentEl.next = currentEl.next.next;
      //currentEl.next.value = currentEl.next.next.value;
      continue;
    }
    currentEl = currentEl.next;
    continue;
  }
  return l;
}

module.exports = {
  removeKFromList,
};
