// Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
// Output: ["mee","aqq"]
// Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
// "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation,
// since a and b map to the same letter.



var findAndReplacePattern = function(words, pattern) {
  let result = [];
  for(let i = 0; i < words.length; i++) {
    if(match(words[i], pattern)) {
      result.push(words[i]);
    }
  }
  return result;
};

function match(word, pattern) {
  let m1 = {}, m2 = {};
  for(let i = 0; i < word.length; i++) {
    let w = word[i];
    let p = pattern[i];
    if(!m1[w]) {
       m1[w] = p;
    }
    if(!m2[p]) {
       m2[p] = w;
    }
    if (m1[w] != p || m2[p] != w) {
      return false;
    }
  }
  return true;
}