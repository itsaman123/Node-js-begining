const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("hello from home side")
    }
    else if(req.url=="/about"){
        res.end("hello this is about side");
    }
    else if(req.url=="/userapi"){
        fs.readFile(`${__dirname}/userapi/userapi.json`,"UTF-8",(err,data)=>{
            //console.log(data);
            res.end("hello this is userapi side"+data);
        })
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 page does not exist</h1>")
    }
    // console.log(req.url);
    // res.end("welcome to the server of the website")
})
server.listen(8000,"127.0.0.1",()=>{
    console.log(`listening on the port ${8000}`);
})



// till 19 done 
