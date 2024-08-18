// Bytes to Bits : 1Byte = 8bits
const bs58 = require('bs58');

let uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
// Convert Uint8Array to a string of binary representations
const byteString = Array.from(uint8Array)
    .map(byte => byte.toString(2).padStart(8, '0')) // Convert each byte to binary and pad with zeros
    .join(' ');

console.log(byteString); // Outputs: "01001000 01100101 01101100 01101100 01101111"

// 1. ASCII -> 1 char = 7 bits

function asciiToBytes(asciiString) {
    const byteArray = [];
    for (let i = 0; i < asciiString.length; i++) {
      byteArray.push(asciiString.charCodeAt(i)); // charCodeAt() returns the Unicode of the character at the specified index in a string
    }
    return Uint8Array.from(byteArray);
  }
  
  // Example usage:
  const ascii = "Hello";

  let byteArray = asciiToBytes(ascii);
  console.log(byteArray); // Output: [72, 101, 108, 108, 111]

  function bytesToAscii(byteArray) {
    return new TextDecoder().decode(byteArray);
  }
  
  // Example usage:
  const bytes = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
  const asciiString = bytesToAscii(bytes);
  console.log(asciiString); // Output: "Hello"

// 2. Hexadecimal -> 1 char = 4 bits

function hexToBytes(hexString) {
    const byteArray = [];
    for (let i = 0; i < hexString.length; i += 2) {
      byteArray.push(parseInt(hexString.substr(i, 2), 16));
    }
    return Uint8Array.from(byteArray);
  }

    // Example usage:
    const hex = "48656c6c6f"; // Corresponds to "Hello"
    byteArray = hexToBytes(hex);
    console.log(byteArray); // Output: [72, 101, 108, 108, 111]

function bytesToHex(bytesArray){
  let hexString = ''
  for (let index = 0; index < byteArray.length; index++) {
    hexString += byteArray[index].toString(16).padStart(2,'0')
  }
  return hexString
}

console.log(bytesToHex([72, 101, 108, 108, 111]))

// 3. Base64 -> 1 char = 6 bits


const base64Encoded = Buffer.from(uint8Array).toString("base64");
console.log(base64Encoded);
const buffer = Buffer.from(base64Encoded, "base64");
uint8Array = new Uint8Array(buffer);
console.log(uint8Array); // Outputs: Uint8Array(5) [72, 101, 108, 108, 111]



function uint8ArrayToBase58(uint8Array) {
  return bs58.default.encode(uint8Array)
}

function base58ToUint8Array(uint8Array) {
  return bs58.default.decode(uint8Array)
}

// Example usage:
byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const base58String = uint8ArrayToBase58(byteArray);
console.log(base58String); // Output: Base58 encoded string
console.log(base58ToUint8Array(base58String))