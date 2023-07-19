const fs = require('fs');
const path = require('path');
const {v4:uuid} = require('uuid');


const dirCodes = path.join(_dirname,'codes');

// creating folder for input codes

if(fs.existsSync(dirCodes)) {

fs.mkdirSync(dirCodes, {recursive :true});    
}
