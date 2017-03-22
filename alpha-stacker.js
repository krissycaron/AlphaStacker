// Create an array that contains the letters of the alphabet
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z"];

var newAlpha = ""; 

// The stackLetter function should accept the array as the sole argument
function stackLetters (array) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
	for (var i=0; i < array.length; i++) {
		newAlpha += array[i];
		if ((newAlpha.length - 3)%4 === 0) {
			newAlpha += " ";
		} 

    	console.log(newAlpha);
		// if (i){
		// 	console.log(alphabet[i]);
		// }
   	}
}

// Invoke the function and pass in the array
stackLetters(alphabet);

newAlpha = "";

 function stackLetters2 (array) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
	for (var i=0; i < array.length; i++) {
	newAlpha += array[i];
		if ((newAlpha.length - 3)%4 === 0);
    	console.log(newAlpha);
	}
}

stackLetters2(alphabet);
