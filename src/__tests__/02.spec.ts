import { anagramSet } from '../02';

function compareArrays(src: string[], target: string[]) {
  if (src.length !== target.length) return false;

  for (const item of src) {
    if (!target.includes(item)) return false;
  }
  return true;
}

describe('Anagram test cases', () => {
  it("should returns ['olleh']", () => {
    expect(
      compareArrays(anagramSet('hello', ['hello', 'olleh']), ['olleh']),
    ).toBe(true);
  });

  it("should returns ['tones', 'notes', 'Seton']", () => {
    expect(
      compareArrays(
        anagramSet('stone', [
          'stone',
          'tones',
          'banana',
          'tons',
          'notes',
          'Seton',
        ]),
        ['tones', 'notes', 'Seton'],
      ),
    ).toBe(true);
  });
});
