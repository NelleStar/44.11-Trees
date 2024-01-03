/** BinaryTreeNode: node for a general tree. */
class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  minDepth(root = this.root) {
    if (!root) return 0;

    if (!root.left && !root.right) return 1;

    if (!root.left) return this.minDepth(root.right) + 1;
    if (!root.right) return this.minDepth(root.left) + 1;

    return Math.min(this.minDepth(root.left), this.minDepth(root.right)) + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  maxDepth(root = this.root) {
    if (!root) return 0;

    if (!root.left && !root.right) return 1;

    if (!root.left) return this.maxDepth(root.right) + 1;
    if (!root.right) return this.maxDepth(root.left) + 1;

    return Math.max(this.maxDepth(root.left), this.maxDepth(root.right)) + 1;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree. The path doesn't need to start at the root, but you can't visit a node more than once. */
  maxSum(node = this.root) {
    const maxSumRec = (node) => {
      if (!node) return 0;

      const leftSum = Math.max(maxSumRec(node.left), 0);
      const rightSum = Math.max(maxSumRec(node.right), 0);

      const currentSum = node.val + leftSum + rightSum;

      maxSum = Math.max(maxSum, currentSum);

      return node.val + Math.max(leftSum, rightSum);
    };

    let maxSum = Number.MIN_SAFE_INTEGER;
    maxSumRec(node);

    return maxSum === Number.MIN_SAFE_INTEGER ? 0 : maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  nextLarger(lowerBound, root = this.root) {
    if (!root) return null;

    let smallestLarger = null;
    let currentNode = root;
    let stack = [];

    while (currentNode || stack.length) {
      while (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }

      currentNode = stack.pop();

      if (currentNode.val > lowerBound) {
        if (!smallestLarger || currentNode.val < smallestLarger) {
          smallestLarger = currentNode.val;
        }
      }

      currentNode = currentNode.right;
    }

    return smallestLarger;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
