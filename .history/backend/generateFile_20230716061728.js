const fs = require('fs');
const path = require('path');


const dirCodes = path.join(_dirname,'codes');

// creating folder for input codes

if(fs.existsSync(dirCodes)) {

fs.mkdirSync(dirCodes, {recursive :true});    
}
