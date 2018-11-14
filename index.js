//variable declaration.
const str = document.getElementById('string');
const num = document.getElementById('number');
const press = document.getElementById('press');
const string_error = document.getElementById('string_error');
const number_error = document.getElementById('number_error');
const result = document.getElementById('result');

//Event tiggered by the split button
press.addEventListener('click', () => {
    let string = str.value.trim(); //Remove the white spaces from the string.
    let number = Math.floor(num.value); //Handles floating values.
  
   //Regex to help with non-conforming strings
    let numTest = /^[0-9]/;
    let specialChar = /^[-!$%^&*()_+|~=`{}\[\]#@:"',/<>\?.]/;
  
    //Validate the string for emptiness
    if(string.length === 0){
       return string_error.innerHTML = "Kindly provide a string";
    }

    //Validate for numbers and special characters
    if(numTest.test(string) || specialChar.test(string) ) {
      return string_error.innerHTML = "Numbers or special characters cannot begin the string";
    } 
  
    /*
    Validate the number for 0(emptiness) and negative entries.
    This also handles browser compatibility issues with input type number.
    */
    if(!number || number <= 0) {
      return number_error.innerHTML = "Non-numerals, 0 and negative integers are not allowed";
    } 

    //Check that the number is not too large.
    if(number > string.length) {
      return number_error.innerHTML = "The number provided is too large.";
    } 

    
   //function to seperate even and odd entries.
    const worker = (string) => {
        let evenChar = "";
        let oddChar = "";
    
        for (let i = 0; i < string.length; i++) {
            if (i % 2 === 0) {
                evenChar += string[i];
            } else {
                oddChar += string[i];
            }
        }
      //concatenate odd chars and even chars
        return oddChar + evenChar;
    };
    
    //Loops n number of split to give the final string.
    for (let i = 0; i < number; i++) {
        string = worker(string);
    }
    
    //Displays manipulated string in the result div.
    return result.innerHTML = string;
});

//clear the error message if the user enters a new string entry.
str.oninput = function () {
    if (this.value.length++) {
        string_error.innerHTML= "";
    }
  };

//clear the error message if the user enters a new number entry.
  num.oninput = function () {
    if (this.value.length++) {
        number_error.innerHTML= "";
    }
  };