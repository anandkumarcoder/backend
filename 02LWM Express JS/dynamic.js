// dynamic route - only a certain part of the url change so to create multiple dynamic (only the changing part)


// ejs also in this file 
const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get('/', function (req, res) {
  //res.send('Hello World') // code for dynamic

  res.render("index", {age:10}) // for ejs code - sending data of age 12


})

app.get('/contact', function (req, res) {
  //res.send('Hello World') // code for dynamic

  res.render("contact", {name:"ANAND'S TEAM"}) // for ejs code


})


app.get('/profile/:username', function (req, res) {
    res.send(`Hello profile ${req.params.username}`)
  })
app.listen(3000)