function fetchData(url) {
  console.log('in fetchData', url);
}

// Solution 2 (part 1): Rebind the value of the url
// let url = '';

function main() {
  // We cannot get this information outside of this function
  const url = 'https://example.com';
  console.log('got the url:', url);

  // Solution 1: Move the call to `fetchData`
  // inside of the scope where it's available
  // fetchData(url)

  // Solution 2 (part 2): Rebind the value of the url
  // url = 'https://example.com';

  // Solution 3 (part 1): Return the url
  // return url;
}

main();

// Further down in your code, unmovable from
// this location:
fetchData(url);

// Solution 3 (part 2): Return the url
// fetchData(main());
