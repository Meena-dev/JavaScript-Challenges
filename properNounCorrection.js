
function properNounCorrection(str) {

    return str.slice(0).toUpperCase()+str.slice(1,str.length).toLowerCase();
}

const str = 'pARiS';
const result = properNounCorrection(str);
console.log("result 1: ", result);