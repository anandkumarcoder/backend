// express Framework
//use case - routing , main types are - GET & POST, others are put patch delete 
// GET - (data in URL will  be shown) 
//(POST - data in URL will not be shown)


// how to use express
const express = require('express')
const app = express() // app can do whatever express can do



// middleware - runs before route runs. This done to do some work before starting route
app.use((req,res,next) => {
console.log("hi i am middleware");
next();// this pushes to next code because it gets jammed from
})

/* app.use((req,res,next) => {
    console.log("hi i am middleware 2");
    next();// this pushs to next code bcause it gets jammed from
    }) */
    



// this is route
app.get('/', function (req, res) {
  res.send('Hello  new World')
})


app.get('/profile', function (req, res) {
  res.send('Hello  profile')
})

app.listen(3000)