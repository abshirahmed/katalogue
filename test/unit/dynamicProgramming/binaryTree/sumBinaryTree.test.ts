import { findLargerLeaf } from '../../../../src/dynamicProgramming/binaryTree/findLargerLeaf';

describe('Find Larger Leaf', () => {
  it.each`
    binaryTree                                      | expectedValue
    ${[3, 6, 2, 9, -1, 10]}                         | ${'Left'}
    ${[1, 4, 100, 5]}                               | ${'Right'}
    ${[1, 10, 5, 1, 0, 6, 9]}                       | ${'Right'}
    ${[1, 10, 5, 1, 0, 6, 9, 10, 2, 3, 1, 4, 1, 2]} | ${''}
    ${[1, 10, 5, 1, 0, 6]}                          | ${''}
    ${[]}                                           | ${''}
    ${[1]}                                          | ${''}
  `(
    'should return $expectedValue when binaryTree equals $binaryTree',
    function ({ binaryTree, expectedValue }) {
      expect(findLargerLeaf(binaryTree)).toEqual(expectedValue);
    }
  );
});
