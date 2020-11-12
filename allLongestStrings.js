function allLongestStrings(array){
    //find the longest length
    let longestLength=0;
    const longestWords=[];

    for(let word of array){
        longestLength=word.length>longestLength?word.length:longestLength;
    }

    for(let word of array){
        if(longestLength===word.length){
            longestWords.push(word)
        }
    }

    //return the longest string
    return longestWords;
}

console.log(allLongestStrings(["abc","aa","b","bbbb","abab","abhn"]));