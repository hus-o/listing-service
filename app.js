const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path")
const querystring = require("querystring")
app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.urlencoded({extended:false}));

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.post("/", (req,res) => {
    console.log(querystring.stringify(req.body))
    formData = querystring.stringify(req.body)
    res.redirect("/results?" + formData)
})

app.get("/results",(req,res)=>{
    res.sendFile(path.join(__dirname, "public/results.html"))
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});