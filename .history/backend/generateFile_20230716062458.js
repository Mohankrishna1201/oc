const fs = require('fs');
const path = require('path');
const {v4: uuid} = require('uuid');


const dirCodes = path.join(_dirname,'codes');

// creating folder for input codes

if(fs.existsSync(dirCodes)) {

fs.mkdirSync(dirCodes, {recursive :true});    
}

const generateFile = (format, content) => {

    const jobId = uuid();
    const filename = `${jobId}.${format}`;
    const filePath = path.join(dirCodes, filename);
} 
module.exports ={
    generateFile,
}