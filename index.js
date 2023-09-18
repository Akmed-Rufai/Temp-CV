const express = require('express')
const ejs = require('ejs')
var path = require('path')
const bodyParser = require("body-parser")

const app = express()

app.set('view engine', 'ejs')

app.use('/', express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//routes

app.get('/', (req, res)=>{
    res.render('CV')
})
app.get('/skills', (req, res)=>{
    res.render('skills')
})

app.get('/downloads', (req, res)=>{
    res.download('./public/mohammed.pdf')
})


app.listen(5000, ()=>{
    console.log('now listening on port 5000');
})