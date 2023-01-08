const EventEmitter=require("events");

const event=new EventEmitter();
event.on('saymynname',()=>{
    console.log("your name is aman");
})
event.emit("saymynname");