const str = "Hello, (world, (foo) bar (something) else), foo (bar) cat";
const num = 1;

//[(]

// 3 opening brackets= ODD
// 2 closing brackets= EVEN

findClosingParenthesis = (str, num) => {
  if (str.length === 0 || !num) return -1;
  const arr = str.split("");
  const isClosedBracket = (element) => element === ")";
  const lastBracketIndex = arr.findIndex(isClosedBracket);

  let countOpening = 0;
  const newArr = []; //change

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      newArr.push(arr[i]);
    }
    if (arr[i] === ")") {
      newArr.pop(arr[i]);
    }
    console.log(newArr);
    if (newArr.length === 1 && arr[i] === ")") {
      return i;
    }
    console.log(newArr.length);
  }

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === "(") {
  //       countOpening++;
  //     }
  //     console.log(countOpening);
  //     if (countOpening === num && arr[i] === ")") {
  //       return i;
  //     }
  //   }
};

module.exports = { findClosingParenthesis };
