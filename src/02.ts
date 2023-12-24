// An anagram is a rearrangement of letters to form a new word:
// for example "owns" is an anagram of "snow". A word is not its own anagram:
// for example, "stop" is not an anagram of "stop".
// Given a target word and a set of candidate words,
// this exercise requests the anagram set:
// the subset of the candidates that are anagrams of the target.
// The target and candidates are words of one or more
// ASCII alphabetic characters (A-Z and a-z).
// Lowercase and uppercase characters are equivalent: for example,
//  "PoTS" is an anagram of "sTOp", but "StoP" is not an anagram of "sTOp".
// The anagram set is the subset of the candidate set that are anagrams of
// the target (in any order). Words in the anagram set should have the
// same letter case as in the candidate set.
// Given the target "stone" and candidates "stone", "tones", "banana", "tons", "notes", "Seton",
//  the anagram set is "tones", "notes", "Seton".

export function anagramSet(target: string, candidates: string[]) {
  const lowerTarget = target.toLowerCase();
  const result = [];

  for (const candidate of candidates) {
    if (isAnagram(lowerTarget, candidate.toLowerCase())) {
      result.push(candidate);
    }
  }
  return result;
}

/**
 * @param {string} target - The target word
 * @param {string} candidate - The candidate word
 */
function isAnagram(target: string, candidate: string) {
  if (target === candidate) return false;
  if (target.length !== candidate.length) return false;

  for (const char of candidate) {
    if (!target.includes(char)) return false;
  }

  return true;
}
