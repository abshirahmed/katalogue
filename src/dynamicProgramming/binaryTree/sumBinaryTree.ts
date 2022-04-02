export function sumBinaryTreeBruteForce(
  parentNodeIndex: number,
  binaryTree: number[]
): number {
  if (parentNodeIndex > binaryTree.length - 1) return 0;
  if (binaryTree.at(parentNodeIndex) === undefined) return 0;
  if (binaryTree.at(parentNodeIndex) === -1) return 0;

  return (
    binaryTree[parentNodeIndex] +
    sumBinaryTreeBruteForce(2 * parentNodeIndex + 1, binaryTree) +
    sumBinaryTreeBruteForce(2 * parentNodeIndex + 2, binaryTree)
  );
}

export function sumBinaryTree(
  parentNodeIndex: number,
  binaryTree: number[],
  memo: Record<string, number> = {}
): number {
  if (parentNodeIndex in memo) return memo[parentNodeIndex];
  if (parentNodeIndex > binaryTree.length - 1) return 0;
  if (binaryTree.at(parentNodeIndex) === undefined) return 0;
  if (binaryTree.at(parentNodeIndex) === -1) return 0;

  memo[parentNodeIndex] =
    binaryTree[parentNodeIndex] +
    sumBinaryTree(2 * parentNodeIndex + 1, binaryTree, memo) +
    sumBinaryTree(2 * parentNodeIndex + 2, binaryTree, memo);

  return memo[parentNodeIndex];
}
