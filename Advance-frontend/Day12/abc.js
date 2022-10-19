const { v4: uuidv4 } = require('uuid');
const jsConvert = require('js-convert-case');
let  uname  = uuidv4();
let message  =  "Unique ID :" +  uname;
console.log(jsConvert.toUpperCase(message));