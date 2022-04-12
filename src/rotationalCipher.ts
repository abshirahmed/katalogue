/**
 * ## Rotational Cipher
 *
 * One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount.
 * Rotating a character means replacing it with another character that is a certain number of steps
 * away in normal alphabetic or numerical order.
 *
 * For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?". Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note that the non-alphanumeric characters remain unchanged.
 *
 * Given a string and a rotation factor, return an encrypted string.
 */

export function rotationalCipher(input: string, rotationalFactor: number) {
  const resultArray = new Array<string>(input.length);

  [...input].forEach((character) =>
    resultArray.push(rotateCharacter(character, rotationalFactor))
  );

  return resultArray.join('');
}

function rotateCharacter(character: string, rotationalFactor: number): string {
  const nonWordCharacterRegex = new RegExp(/\W/);
  const upperCaseRegex = new RegExp(/[A-Z]/);
  const numberRegex = new RegExp(/\d/);

  if (nonWordCharacterRegex.test(character)) return character;
  if (numberRegex.test(character)) {
    const result = (+character + rotationalFactor) % 10;
    return result.toString();
  }
  const isUpperCase = upperCaseRegex.test(character);

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const charIndex = alphabet.indexOf(character.toLocaleLowerCase());
  const resultIndex = (charIndex + rotationalFactor) % alphabet.length;
  const result = alphabet.charAt(resultIndex);

  return isUpperCase ? result.toUpperCase() : result;
}
