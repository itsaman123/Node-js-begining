const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("hello from home side")

    }
    else if(req.url=="/about"){
        res.end("hello this is about side");
    }
    // console.log(req.url);
    // res.end("welcome to the server of the website")
})
server.listen(8000,"127.0.0.1",()=>{
    console.log(`listening on the port ${8000}`);
})

