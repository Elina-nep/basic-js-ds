const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  rootElement = null;
  root() {
    return this.rootElement;
  }

  add(newValue) {
    var newElement = new Node(newValue);
    var targetElement;
    if (this.rootElement === null) {
      this.rootElement = newElement;
    } else {
      targetElement = this.rootElement;
      while (true) {
        if (newValue < targetElement.data) {
          if (targetElement.left === null) {
            targetElement.left = newElement;
            break;
          } else {
            targetElement = targetElement.left;
            continue;
          }
        } else if (newValue > targetElement.data) {
          if (targetElement.right === null) {
            targetElement.right = newElement;
            break;
          } else {
            targetElement = targetElement.right;
            continue;
          }
        } else {
          return;
        }
      }
    }
  }

  has(someData) {
    if (this.find(someData) === null) {
      return false;
    } else return true;
  }

  find(dataToFind) {
    var targetElement = this.rootElement;
    while (true) {
      if (targetElement === null) {
        return null;
      } else if (dataToFind < targetElement.data) {
        targetElement = targetElement.left;
        continue;
      } else if (dataToFind > targetElement.data) {
        targetElement = targetElement.right;
        continue;
      } else {
        return targetElement;
      }
    }
  }

  remove(dataToRemove) {
    var targetElement = this.find(dataToRemove);
    if (targetElement === null) {
      return;
    }
    var parrent = this.findParrent(dataToRemove);
    if (parrent === null) {
      this.rootElement = targetElement.left;
      var leftSide = targetElement.left;
      if (leftSide === null) {
        this.rootElement = targetElement.right;
        return;
      }
      while (true) {
        if (leftSide.right === null) {
          leftSide.right = targetElement.right;
          return;
        } else {
          leftSide = leftSide.right;
          continue;
        }
      }
    }

    if (targetElement == parrent.left) {
      parrent.left = targetElement.left;
      var leftSide = targetElement.left;
      if (leftSide === null) {
        parrent.left = targetElement.right;
        return;
      }
      while (true) {
        if (leftSide.right === null) {
          leftSide.right = targetElement.right;
          return;
        } else {
          leftSide = leftSide.right;
          continue;
        }
      }
    }
    if (targetElement == parrent.right) {
      parrent.right = targetElement.left;
      var leftSide = targetElement.left;
      if (leftSide === null) {
        parrent.right = targetElement.right;
        return;
      }
      while (true) {
        if (leftSide.right === null) {
          leftSide.right = targetElement.right;
          return;
        } else {
          leftSide = leftSide.right;
          continue;
        }
      }
    }
  }

  findParrent(data) {
    if (this.find(data) === null) {
      return null;
    }
    var targetElement = this.rootElement;
    if (targetElement.data === data) {
      return null;
    }
    while (true) {
      if (
        (targetElement.left !== null && data == targetElement.left.data) ||
        (targetElement.right !== null && data == targetElement.right.data)
      ) {
        return targetElement;
      }
      if (data < targetElement.data) {
        targetElement = targetElement.left;
        continue;
      } else if (data > targetElement.data) {
        targetElement = targetElement.right;
        continue;
      }
    }
  }

  min() {
    if (this.rootElement === null) {
      return null;
    }
    var targetElement = this.rootElement;
    while (true) {
      if (targetElement.left === null) {
        return targetElement.data;
      } else {
        targetElement = targetElement.left;
        continue;
      }
    }
  }

  max() {
    if (this.rootElement === null) {
      return null;
    }
    var targetElement = this.rootElement;
    while (true) {
      if (targetElement.right === null) {
        return targetElement.data;
      } else {
        targetElement = targetElement.right;
        continue;
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
