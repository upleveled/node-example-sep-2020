function main() {
  console.log('we are in b.js');
}

function fetchData(url) {
  console.log('fetching!', url);
}

module.exports = {
  main: main,
  fetchData: fetchData,
};
