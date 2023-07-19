const express = require('express');

const app = express();
app.use(express.urlencoded ({extended:true}));
app.use(express.json);


app.get("/", (req, res) => {

    res.json({online :"compiler"});
  
});

app.listen(6000, () =>{
    console.log("server is running on 6000!!");
}
)