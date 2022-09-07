

const express=require('express');
app.set('port',80);

app.get("/",(req,res)=>{
    res.send("Hi~");
});

app.listen(app.get("port"),()=>{
    console.log(app.get('port'),"번 포트에서 대기중");
});