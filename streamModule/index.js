const fs=require("fs");
const http=require("http");
const server=http.createServer();

server.on("request",(req,res)=>{
    // var fs=require("fs");
    // fs.readFile("input.txt",(err,data)=>{
    //     if(err) return console.end(err);
    //     res.end(data.toString());
    // })
 // const rdstream=fs.createReadStream("input.txt")
    // rdstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata);
    // })
    // rdstream.on("end",()=>{
    //     res.end();
    // })
    // rdstream.on("error",(err)=>{
    //     res.writableNeedDrain("file not found")
    // })
    const rdstream=fs.createReadStream("input.txt")
    rdstream.pipe(res);
})

server.listen(8000,'127.0.0.1');


