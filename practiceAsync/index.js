const fs=require("fs");

// fs.writeFile("bio.txt","hello this is aman maurya",
// (err)=>{
//     console.log("completed");
// })

// fs.appendFile("bio.txt"," i am doing batcholers in computer science and engineering",
// (err)=>{
//     console.log("done");
// });


// fs.readFile("bio.txt","UTF-8",
// (err,data)=>{
//     console.log(data);
// })

// fs.unlink("bio.txt",
// (err)=>{
//     console.log("done")
// })

fs.rmdir('./practiceAsync',
(err)=>{
    console.log("done")
})