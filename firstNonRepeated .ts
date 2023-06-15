/**
 * Problem: FirstNonRepeated Function
 * Issued by: Fleet Coffee
 * 
 * Description:
 * Here is my attempt at the FirstNonRepeated function problem issued by Fleet Coffee.
 * The goal of the problem is to write a function called firstNonRepeated that takes a single string s
 * as input and returns the first non-repeated character in the string. If there is no non-repeated character,
 * the function should return an empty string.
 * 
 * Approach:
 * I have implemented three different versions of the function. Initially, I started with a brute force method,
 * which involved iterating through the string and checking for repetitions. However, the time complexity of this
 * approach was O(n^2), which is not ideal.
 * 
 * Next, I attempted a hashmap function. This approach involves counting the occurrences of each character in the
 * string using a hashmap, and then finding the first non-repeated character by iterating through the string once again.
 * This version improved the time complexity to O(n), which is more efficient.
 * 
 * Finally, I further optimized the hashmap approach by combining the two loops into a single loop. This updated version
 * maintains a linear time complexity of O(n) while finding the first non-repeated character in the string.
 */


function firstNonRepeated(s: string): string {
    // Approach 1: Brute Force, O(n^2)

    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];
      let repeated = false;
  
        // Loop through the string again to see if the character is repeated
      for (let j = 0; j < s.length; j++) {
        if (i !== j && currentChar === s[j]) {
          repeated = true;
          break;
        }
      }
      // If the character is not repeated, return it
      if (!repeated) {
        return currentChar;
      }
    }
  
    return "";
  }


function firstNonRepeated2(s: string): string {
    // Approach 2: Hash Map, O(n)
    const charCountMap: { [key: string]: number } = {};
  
    // Count the number of times each character appears
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCountMap[char] = (charCountMap[char] || 0) + 1;
    }
  
    // Find the first non-repeated character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charCountMap[char] === 1) {
        return char;
      }
    }
  
    return "";
  }


function firstNonRepeated3(s: string): string {
    // Approach 2.1: Hash Map, O(n)
    const charCountMap: { [key: string]: number } = {};
    let firstNonRepeatedChar = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCountMap[char] = (charCountMap[char] || 0) + 1;
        // If the character is non-repeated, set it as the first non-repeated character
        if (charCountMap[char] === 1 && firstNonRepeatedChar === '') { 
            firstNonRepeatedChar = char;   
        } // If the character is repeated, and it is the first non-repeated character, set the first non-repeated character to empty string
         else if (charCountMap[char] > 1 && char === firstNonRepeatedChar) {
            firstNonRepeatedChar = '';
        }
    }

    return firstNonRepeatedChar;
}



// Testing the function
console.log(firstNonRepeated3("hello")); // Output: "h"
console.log(firstNonRepeated3("aabcc")); // Output: "b"
console.log(firstNonRepeated3("aabbcc")); // Output: ""
