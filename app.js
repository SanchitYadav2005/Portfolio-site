const express = require("express");
const app = express();
const port = 3000;
const path = require("path");


app.use(express.static('public'));
app.use('view engine', 'ejs');
app.use('views', path.join(__dirname, '/views'));


app.get('/', (req,res)=>{
    res.send("hello world!!");
});

app.listen(port, ()=>{
    console.log("serving!");
})