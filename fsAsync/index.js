const fs=require("fs");

const data=fs.readFile("read.txt","UTF-8",
(err,data)=>{
    console.log(data);
});
console.log("after the data");
