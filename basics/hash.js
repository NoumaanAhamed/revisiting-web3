const crypto = require('crypto');

function sha256ToBinary(input) {
  // Create a SHA-256 hash of the input
  const hash = crypto.createHash('sha256');
  hash.update(input);
  
  // Get the digest in hexadecimal format
  const hexDigest = hash.digest('hex');
  
  // Convert hex to binary string
  let binaryDigest = '';
  for (let i = 0; i < hexDigest.length; i++) {
    // Convert each hex digit to a 4-bit binary string
    const binaryChunk = parseInt(hexDigest[i], 16).toString(2).padStart(4, '0');
    binaryDigest += binaryChunk;
  }
  
  return [hexDigest,binaryDigest];
}

// Example usage
const inputString = 'Hello, World!';
const Hash = sha256ToBinary(inputString);
console.log('Hex 32 bit Hash:', Hash[0]);
console.log('Binary SHA-256 Hash:', Hash[1]);
