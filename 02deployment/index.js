require('dotenv').config()
const express = require("express");
const app = express();
const port = 5000;

//  "/" is home route

app.get("/", (req, res) => {
  res.send("Hello World! war");
});
// ------------
// test


app.get('/twitter', (req, res) =>{
res.send('@Anand5')
})


app.get('/login', (req, res) =>{
    res.send('<h1>Hi please visit twitter login page <a>https://twitter.com/i/flow/login</a></h1>')
    })



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
