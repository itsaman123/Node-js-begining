const fs=require("fs");
const bioData={
    name:"aman",
    age:"19",
    channel:{name:"thapa"},
}
//console.log(bioData.channel.name);

// const jsonData=JSON.stringify(bioData);
const objData=JSON.parse(jsonData);
console.log(objData.age); 
console.log(objData); 

const jsonData=JSON.stringify(bioData);
fs.writeFile("bioData.json",jsonData,
(err)=>{
    console.log("done");
})

fs.readFile("bioData.json","UTF-8",(err,data)=>{
    // console.log(data);
    const orgData=JSON.parse(data);
    console.log(data);
    console.log(orgData);
})