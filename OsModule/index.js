const os=require("os");
console.log(os.arch());
console.log(os.hostname())
console.log(os.platform())
const freeMomery=os.freemem();
console.log(`${freeMomery/1024/1024/1024}`)

console.log(os.type())