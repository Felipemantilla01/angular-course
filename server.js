var express = require('express')
var app = express()
var morgan = require('morgan')

//app.use(morgan('dev'))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/employees', (req,res)=>{
    res.status(200)
    res.send([
        {"id":1,"name":"Andrew","age":30},
      {"id":2,"name":"Jose","age":25},
      {"id":3,"name":"Daniel","age":19},
      {"id":4,"name":"Gael","age":32},
    ])
})

app.get('/departments', (req,res)=>{
    res.status(200)
    res.send([
        {"id":1,"name":"Systems"},
      {"id":2,"name":"Management" },
      {"id":3,"name":"Tresure" },
      {"id":4,"name":"Sells" },
    ])
})

app.listen(3200, ()=>{
    console.log('api-rest-server on port 3200')
})