// 1. Calling an undefined variable
let scrapeMemes;
scrapeMemes();

// 2. Calling a function without a function argument
function main(fn) {
  fn();
}

main();

// 3. Calling a non-existent method
const obj = {};
obj.fn();
