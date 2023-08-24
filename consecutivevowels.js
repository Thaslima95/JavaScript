function removeConsecutiveVowels(input) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let result = '';
  let prevChar = '';
  for (let char of input) {
    if (vowels.has(char) && vowels.has(prevChar)) {
      // Ignore consecutive vowels
      continue;
    }
    result += char;
    prevChar = char;
  }
  return result;
}
// Example 1
const input1 = "Cat";
const output1 = removeConsecutiveVowels(input1);
console.log(output1); // Output: "Ct"
// Example 2
const input2 = "Compuuter";
const output2 = removeConsecutiveVowels(input2);
console.log(output2); // Output: "Cmpuutr"