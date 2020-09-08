const emoji = require('emojilib');

const emojiLibrary = emoji.lib;
const command = process.argv[2];

// If the command exists in the library
if (emojiLibrary[command]) {
  console.log(emojiLibrary[command].char);
} else {
  console.log('Emoji not found');
}
