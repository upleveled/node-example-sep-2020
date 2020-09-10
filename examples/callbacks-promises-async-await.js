// Callbacks
setTimeout(function handleTimeout() {
  console.log('1 timeout completed');
}, 1000);

console.log('2 program running');

// Promises
Promise.resolve().then(() => {
  console.log('3 promise resolved');
});

console.log('4 program running');

// async / await
async function main() {
  await Promise.resolve();
  console.log('5 promise resolved');
  await Promise.resolve();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log('6 program running');
}

main();
