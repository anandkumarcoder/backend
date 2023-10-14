// express Framework
//use case - routing , main types are - GET & POST, others are put patch delete 
// GET - (data in URL will  be shown) 
//(POST - data in URL will not be shown)


// how to use express
const express = require('express')
const app = express() // app can do whatever express can do

app.use((req,res,next) => {
console.log("hi i am middleware");
next();// this pushs to next code bcause it gets jammed from
})

app.use((req,res,next) => {
    console.log("hi i am middleware 2");
    next();// this pushs to next code bcause it gets jammed from
    })
    


// middleware - runs before route runs. This done to do some work before starting route

app.get('/', function (req, res) {
  res.send('Hello  new World')
})

app.listen(3000)