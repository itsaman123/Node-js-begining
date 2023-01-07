const fs=require("fs");
fs.writeFile('read.txt',"An awesome day",
(err)=>{
    console.log("completed");
});
