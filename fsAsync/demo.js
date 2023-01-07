const fs=require("fs");


// fs.writeFile('read.txt',"An awesome day",
// (err)=>{
//     console.log("completed");
//     console.log(err);
// });

// fs.appendFile('read.txt',"please study more",
// (err)=>{
//     console.log("appended");
// })



fs.readFile('read.txt',"UTF-8",
(err,data)=>{
    console.log(data);
});