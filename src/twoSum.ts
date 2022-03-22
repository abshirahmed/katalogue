export function twoSum(nums: number[], target: number): number[] | void {
  const complementMap = new Map();
  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];
    if (complementMap.has(complement)) {
      return [complementMap.get(complement), index];
    }
    complementMap.set(nums[index], index);
  }
}
