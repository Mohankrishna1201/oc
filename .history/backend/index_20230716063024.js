const express = require('express');
const { generateFile } = require('./generateFile');

const app = express();

app.use( express.urlencoded({ extended:true}));
app.use(express.json());


app.get("/", (req, res) => {

    res.json({ online :"compiler"});
  
});

app.post("/run", (req, res) => {
//console.log(req.body);
//res.json(req.body);
const {language ='cpp', code} = req.body;
if(code === undefined){
    return res.status(404).json({success:false, error :"Empty code body"});
}
const filePath = generateFile(language,code);
res.json({filePath});
  
});

app.listen(5000, () =>{
    console.log("server is running on 5000!!");
}
)