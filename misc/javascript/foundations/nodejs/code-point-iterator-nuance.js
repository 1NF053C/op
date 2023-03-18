const { Buffer } = require('node:buffer');

let mockChatStr = 'Hello 😀';

const charArr1 = [...mockChatStr];
const buf1 = Buffer.alloc(charArr1.length);

const charArr2 = mockChatStr.split('').map((c) => {
    return c
});
const buf2 = Buffer.alloc(charArr2.length);

buf1.write(mockChatStr); 
buf2.write(mockChatStr);
const buf3 = Buffer.from(mockChatStr);

console.log(buf1.byteLength);  // 7
console.log(buf2.byteLength);  // 8
console.log(buf3.byteLength);  // 10

console.log(`"${buf1.toString()}"`); // "Hello "
console.log(`"${buf2.toString()}"`); // "Hello "
console.log(`"${buf3.toString()}"`); // "Hello �"
