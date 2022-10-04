/*
Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/

const Person = function(firstAndLast) {
  let firstName = firstAndLast.match(/^[\w]+/g);
  let lastName = firstAndLast.match(/[\w]+$/g);
  
  this.setFirstName = function(first) {
    firstName = first;
  }
  this.getFirstName = function() {
    return `${firstName}`;
  }
  
  this.setLastName = function(last) {
    lastName = last;
  }
  this.getLastName = function() {
    return `${lastName}`;
  }
  
  this.setFullName = function(firstAndLast) {
    firstName = firstAndLast.match(/^[\w]+/g);
    lastName = firstAndLast.match(/[\w]+$/g);
  }
  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName();
  }
}

const bob = new Person("Bob Ross");


//Test problems:
//No properties should be added. Object.keys(bob).length should always return 6

console.log(bob instanceof Person); 
//should return true

console.log(bob.firstName); 		
//should return undefined

console.log(bob.lastName); 		
//should return undefined

console.log(bob.getFirstName()); 	
//should return the string Bob

console.log(bob.getLastName()); 	
//should return the string Ross

console.log(bob.getFullName()); 	
//should return the string Bob Ross

console.log(bob.getFullName()); 	
//should return the string Haskell Ross after bob.setFirstName("Haskell")

console.log(bob.getFullName()); 	
//should return the string Haskell Curry after bob.setLastName("Curry")

console.log(bob.getFullName()); 	
//should return the string Haskell Curry after bob.setFullName("Haskell Curry")

console.log(bob.getFirstName()); 	
//should return the string Haskell after bob.setFullName("Haskell Curry")

console.log(bob.getLastName());	
//should return the string Curry after bob.setFullName("Haskell Curry")