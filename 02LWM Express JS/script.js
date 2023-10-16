const express = require('express')
const app = express()


/*  middleware is a callback function which run before route, 
req - has user data 
res - has data which is sent from server to the user device
next - control from one middleware to next middleware or next route doesn't go automatically , hence we use next to push it to next item manually
*/


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)