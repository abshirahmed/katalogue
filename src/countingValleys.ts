export function countingValleys(steps: number, path: string): number {
  let elevation = 0;
  let valleys = 0;

  for (let i = 0; i < steps; i++) {
    if (path.charAt(i) === 'D') {
      if (elevation == 0) {
        valleys++;
      }
      elevation--;
    } else {
      elevation++;
    }
  }

  return valleys;
}
