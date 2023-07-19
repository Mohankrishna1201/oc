const fs =require('fs');
const path = require('path');

const outputPath = path.join(__dirname, 'outputs');

if(!fs.existsSync(outputPath)) {

    fs.mkdirSync(outputPath, {recursive:true});
}

const executeCpp =(filePath) => {



};


