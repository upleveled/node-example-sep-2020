if (true) {
  // This is potentially confusing if you are
  // expecting it to be only available inside this block
  var url = 'https://example.com';
}

console.log(url);

// ---

// This will work, because the function is "hoisted"
// up to the top of the scope (top of the file in
// this case)
console.log(main());
function main() {
  const url2 = 'https://example.com';
  return url2;
}

// This will not work
console.log(main2());
const main2 = () => {
  const url3 = 'https://example.com';
  return url3;
};
