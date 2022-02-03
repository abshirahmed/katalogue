export function fizzBuzz(value: number): number | string {
  let fizz = '';
  let buzz = '';

  if (value % 3 === 0) {
    fizz = 'Fizz';
  }

  if (value % 5 === 0) {
    buzz = 'Buzz';
  }

  if (fizz || buzz) {
    return fizz + buzz;
  }

  return value;
}
