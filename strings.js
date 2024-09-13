//Create a variable named favActorFirstName and store your favorite actor's first name.
let favActorFirstName = "Cardo";
//Create a variable named favActorLastName and store their last name.
let favActorLastName = "Dalisay";
//Concatenate the first and last names into a variable named fullName.
let fullName = favActorFirstName + ' ' + favActorLastName;

//Create a variable named uppercase and store the lowercase version of your favorite actor's name.
let uppercase = fullName;
//Create a variable named lowercase and store the capitalized version of your favorite pet’s name.
let lowercase = "browney";

//Create a variable named message and store a message like: "My favorite actor is [FULL_NAME]". The name should be in uppercase.
let message =  `My favorite actor is ` + fullName.toUpperCase();
//append
message += " his best show is Ang Probinsyano"

//Log all variables 
console.log(favActorFirstName);
console.log(favActorLastName);
console.log(fullName);
console.log(uppercase.toLowerCase());
console.log(lowercase.toUpperCase());
console.log(message);