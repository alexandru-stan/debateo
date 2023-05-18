// function spinWords(string){
//     let array = string.split(" ");
     
//      array.forEach((element,index) => {
       
//        if(element.length>=5){
      
//          let newElement="";
//          for(i=element.length-1;i>=0;i--){
//            newElement+=element.charAt(i);
                 
//          }
//         array[index] = newElement;
        
         
         
//        }
       
//      });
//      let newString = array.join(' ');
//      return newString;

  
     
//    }

//    spinWords("Welcome");


// function spinWords(words){
//     return words.split(' ').map(function (word) {
//       return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
//   }

  
function spinWords(words){
    return words.split(' ').map(word =>  {
      return  word.length >=5 ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

  console.log(spinWords("Hola Mundoooooaaaa"))