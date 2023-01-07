var fs=require("fs");

//fs.writeSynk("read.txt", "hello guys");
//fs.appendFileSync("read.txt","hello");
// const buf_data=fs.readFileSync('read.txt');
// org_data=buf_data.toString();
// console.log(org_data);

// rename file 

//fs.renameSync('read.txt','readwrite.txt');

// exercise 1
// fs.mkdirSync('node');
//fs.writeFileSync('node/hello.txt',"this is my bio data");

//fs.appendFileSync('node/hello.txt',"my name is aman maurya")
// const buff_data=fs.readFileSync('node/hello.txt');
// const org_data=buff_data.toString();
// console.log(org_data);

//fs.renameSync('node/hello.txt','amanbio.txt');

fs.unlinkSync('amanbio.txt');