/* 
write a function that checks if two provided strings are anagrams of each other; 
letter casing shouldn’t matter. 
Also, consider only characters, not spaces or punctuation
example:
anagram('finder', 'Friend')  --> true
anagram('hello', 'bye') --> false 
“listen” and “silent”
“rail safety” and “fairy tales”
“dormitory” and “dirty room”
“the eyes” and “they see”*/

function anagram(strA,strB){
    /*First, we remove any non-alphabet character using regex and convert       
        convert the strings to lowercase. */
        strA = strA.replace(/[^\w]/g, '').toLowerCase();
        strB = strB.replace(/[^\w]/g, '').toLowerCase();
        if(strA.length!==strB.length){
            return false;
        }
        else{
            return sortString(strA)===sortString(strB);
        }
        
}

/*This function sorts the strings*/ 
function sortString(string) {
    return string.split('').sort().join('');
}
console.log(anagram("finder","friend"));