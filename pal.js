
 function palindrome() {
    //sets str to the value of the forms input
     let str = document.getElementById("palCheck").value;
     console.log(str);
     //sets lenths to be the length of the input
     let length = str.length;
     console.log(length);
     //if i is less than half of length, this loop will run
     for(let i = 0 ; i< length /2; i++){
         //checks if first and last are the same then checks the next letter in line
         if(str[i] != str[length - 1 -i]){
             alert("This is not a palindrome!");
             alert("Thanks for playing");
             return;
         }
         alert("This is a palindrome!");
         alert("Thanks for playing");
         return;
     }
 
 }
 window.addEventListener("DOMContentLoaded", (event) => {
    const checker = document.getElementById("palChecker")
    if(checker){
        checker.addEventListener('submit', palindrome);
    }
}); 