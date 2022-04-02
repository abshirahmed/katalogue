import { sumBinaryTree } from './sumBinaryTree';

export function findLargerLeaf(binaryTree: number[]): string {
  const [rootNode, leftChild, rightChild] = binaryTree;

  if (rootNode === undefined) return '';
  if (leftChild === undefined) return '';
  if (rightChild === undefined) return 'Left';

  const leftBranchSum = sumBinaryTree(
    binaryTree.indexOf(leftChild),
    binaryTree
  );

  const rightBranchSum = sumBinaryTree(
    binaryTree.indexOf(rightChild),
    binaryTree
  );

  if (leftBranchSum === rightBranchSum) return '';
  if (leftBranchSum > rightBranchSum) return 'Left';

  return 'Right';
}
