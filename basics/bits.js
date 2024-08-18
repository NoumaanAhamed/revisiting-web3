// 1 byte = 8 bits = 2^8 = 256  ( 0 - 255 )
let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 300; // 300 % 256 = 44
// console.log(uint8Arr) // Uint8Array [ 0, 44, 127, 128 ] 
