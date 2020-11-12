//Given an array replace an array with elemToreplace with substitution elem
function arrayReplace(array, elemToReplace, substitutionElem) {
    //  write code here.
    for(let i=0;i<array.length;i++){
        if(array[i]===elemToReplace){
            array[i]=substitutionElem;
        }
    }
    return array;
}

const array = [1, 2, 1];
const elemToReplace = 1;
const substitutionElem = 3;

const result = arrayReplace(array, elemToReplace, substitutionElem);

// log
console.log("result: ", result)