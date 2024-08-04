const crypto = require('crypto');

// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = `
Noumaan => Raman | Rs 100
Ram => Ankit | Rs 10
` + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

// Find and print the input string and hash
const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`); 
// creation of a block -> Group of transactions + hash of previous block + nonce + block number -> hash of the block
// Blockchain -> chain of blocks -> if one block is changed, all the blocks after that will have to be changed 
// longest chain is the valid chain -> consensus algorithm
console.log(`Hash: ${result.hash}`);