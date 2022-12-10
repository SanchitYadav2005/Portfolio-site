const express = require("express");
const app = express();
const port = 3000;
const path = require("path");


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req,res)=>{
    res.render("home");
});
app.get('/about', (req,res)=>{
    res.render('about');
});
app.get('/contact', (req,res)=>{
    res.render('contact');
})
app.listen(port, ()=>{
    console.log("serving!");
})