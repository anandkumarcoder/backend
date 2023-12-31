// dynamic route - only a certain part of the url change so to create multiple dynamic (only the changing part)



const express = require('express')
const app = express()

// configure the express static
 app.use(express.static("./public"))



// configuring ejs ejs also in this file 
 app.set("view engine", "ejs")



// rendering data from ejs file (inside views folder)
app.get('/', function (req, res) {
  //res.send('Hello World') // code for dynamic

  res.render("index", {age:10}) // for ejs code - sending data of age 12


})


// rendering contact page

app.get('/contact', function (req, res) {
  //res.send('Hello World') // code for dynamic

  res.render("contact", {name:"ANAND'S TEAM"}) // for ejs code


})

// error handling 

app.get('/error', function (req, res, next) {

throw Error ("something went wrong")
})

// dynamic routing - use ":", to acces use ->req.params.username
app.get('/profile/:username', function (req, res, next) {
    res.send(`Hello profile ${req.params.username}`)
  })

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})


app.listen(3000)