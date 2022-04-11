/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1
Write a function named howMuchPencil that takes in a string, as written on the side of a pencil.
As you sharpen the pencil, the string will become shorter and shorter, starting by removing the first letter.
Your function should use slice within a loop and return an array of each successive string result from losing letters to the sharpener, until nothing is left.
For example, if the input is 'Welcome', the output will be:
['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', ''].
------------------------------------------------------------------------------------------------ */

export const howMuchPencil = (str) => {
  const result = [];
  for (let i = 0; i < str.length + 1; i++) {
    result.push(str.slice(i));
  }
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function name wordsToCharList that, given a string as input, returns a new array where every element is a character of the input string.
For example, wordsToCharList('gregor') returns ['g','r','e','g','o','r'].
------------------------------------------------------------------------------------------------ */

export const wordsToCharList = (str) => str.split('');

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
You are making a grocery list for ingredients needed in the gruffalo crumble recipe, below. Rather than taking the entire recipe, you only want a list of the item names.
Write a function named listFoods that takes in the recipe and returns a new array of the food items without any amount or units. Just the name. For example, '1 cup flour' will return 'flour'.
Use slice for this function, maybe more than once. The .indexOf() method may also be helpful.
Do not use split for this function.
------------------------------------------------------------------------------------------------ */

export const listFoods = (recipe) => {
  // const singles = [];
  // for (let i = 0; i < recipe.ingredients.length; i++) {
  //   const e = recipe.ingredients[i];
  //   const first = e.substring(e.indexOf(' ') + 1);
  //   singles.push(first.substring(first.indexOf(' ') + 1));
  // }
  // return singles;

  const singles = recipe.ingredients.map((e) => {
    const first = e.substring(e.indexOf(' ') + 1);
    return first.substring(first.indexOf(' ') + 1);
  });
  return singles;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named splitFoods that uses split to produce the same output as Challenge 3.
You may also use other string or array methods.
------------------------------------------------------------------------------------------------ */

export const splitFoods = (recipe) => {
  // const words = [];
  // recipe.ingredients.forEach((e) => {
  //   words.push(e.split(' '));
  // });
  // const results = [];
  // for (let i = 0; i < words.length; i++) {
  //   results.push(words[i].slice(2).join(' '));
  // }
  // return results;

  const results = recipe.ingredients.map((e) =>
    e.split(' ').slice(2).join(' ')
  );
  return results;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Use the same recipe from Challenge 3, above.
Write a function named stepAction that takes in the recipe and extracts the action verbs from the steps. Fortunate for you, the action verbs are the first word of each action.
Return a new array containing just the verbs. For example, ['Mix until evenly distributed'] returns ['Mix'].
------------------------------------------------------------------------------------------------ */

export const stepActions = (recipe) => {
  // const actions = [];
  // recipe.steps.forEach((e) => {
  //   actions.push(e.slice(0, e.indexOf(' ')));
  // });
  // return actions;

  const verbs = recipe.steps.map((e) => e.slice(0, e.indexOf(' ')));
  return verbs;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
Write a function named removeEvenValues that, given an array of integers as input, deletes all even values from the array, leaving no 'gaps' behind.
The array should be modified in-place.
For example:
  const integers = [1, 2, 3, 4, 5, 6];
  removeEvenValues(integers);
  console.log(integers) will print [1, 3, 5]
------------------------------------------------------------------------------------------------ */

export const removeEvenValues = (arr) => {
  // arr.forEach((e) => {
  //   if (e % 2 === 0) {
  //     arr.splice(arr.indexOf(e), 1);
  //   }
  // });
  // UNABLE TO USE FOR EACH BECAUSE AFTER EACH EVEN IS DELETED, A STEP BACK IS NEEDED TO CHECK NEXT ELEMENT (i--)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7
Write a function named removeLastCharacters that takes in a string and a number. The numberOfCharacters argument determines how many characters will be removed from the end of the string. Return the resulting string.
If the numberOfCharacters argument is greater than the length of the input string, the function should return an empty string.
If the numberOfCharacters argument input is a negative number, the function should return the input string without any changes.
For example:
removeLastCharacters('Gregor', 2) returns 'Greg'
removeLastCharacters('Gregor', -2) returns 'Gregor'
removeLastCharacters('Gregor', 9) returns ''
------------------------------------------------------------------------------------------------ */

export const removeLastCharacters = (str, numberOfCharacters) =>
  str
    .split('')
    .splice(0, str.length - numberOfCharacters)
    .join('');

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal
Write a function named totalSumCSV that, given a string of comma-separated values (CSV) as input. (e.g. "1,2,3"), returns the total sum of the numeric values (e.g. 6).
------------------------------------------------------------------------------------------------ */

export const totalSumCSV = (str) => {
  let sum = 0;
  str.split(',').forEach((e) => {
    sum += parseInt(e);
  });
  return sum;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal
Write a function named removeVowels that takes in a string and returns a new string where all the vowels of the original string have been removed.
For example, removeVowels('gregor') returns 'grgr'.
------------------------------------------------------------------------------------------------ */

export const removeVowels = (str) => {
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (
      // arr[i] === 'a' ||
      // arr[i] === 'e' ||
      // arr[i] === 'i' ||
      // arr[i] === 'o' ||
      // arr[i] === 'u'
      arr[i].match(/[aeiou]/gi)
    ) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr.join('');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal
Write a function named extractVowels that takes in a string and returns an array where the first element is the original string with all the vowels removed, and the second element is a string of all the vowels that were removed, in alphabetical order.
For example, extractVowels('gregor') returns ['grgr', 'eo'].
Similarly, extractVowels('The quick brown fox') returns ['Th qck brwn fx', 'eioou']
------------------------------------------------------------------------------------------------ */

export const extractVowels = (str) => {
  const vowels = [];
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[aeiou]/gi)) {
      vowels.push(arr.splice(i, 1).join(''));
      i--;
    }
  }
  return [arr.join(''), vowels.join('')];
};
