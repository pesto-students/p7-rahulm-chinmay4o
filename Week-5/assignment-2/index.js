function isVowel(char) {
  return "aeiou".includes(char);
}

function vowelCount(str) {
  const vowelMap = new Map();

  for (let char of str) {
    let lowerCaseChar = char.toLowerCase();

    if (isVowel(lowerCaseChar)) {
      if (vowelMap.has(lowerCaseChar)) {
        console.log(str.indexOf(lowerCaseChar)) // incase numbers are alloted as keys
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }

  console.log(vowelMap)
  return vowelMap;
}

vowelCount("chinmaaay");
