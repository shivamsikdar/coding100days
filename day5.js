// How to find the number of letters in the longest word in the string

function longestString(str){

    let words = str.split(' ');

    let maxLength = 0;
    
    for(var i = 0; i<words.length; i++){

      if(words[i].length > maxLength){
      maxLength = words[i].length;
       }
    }
    return maxLength;
  }
   console.log(longestString('The quick brown fox jumped over the lazy dog'));

//  Output is showing the number of letters in the longest word in string