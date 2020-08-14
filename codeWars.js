//--------------------------------------------------------------------------------------------------------------------------------------------Simple-string-reversal(7LVL)-------
//Description:
//In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.
//
//For example:
//
//solve("our code") = "edo cruo"
//-- Normal reversal without spaces is "edocruo". 
//-- However, there is a space after the first three characters, hence "edo cruo"
//
//solve("your code rocks") = "skco redo cruoy"
//solve("codewars") = "srawedoc"

function solve(str) {
   let result = str.replace(/ /g, '').split('').reverse()
   for (let i = 0; i < str.length; i++) {
     str[i] === ' ' ? result.splice(i, 0, ' ') : null
   }
   return result.join('')
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------Over-the-road(7LVL)----------
//You've just moved into a perfectly straight street with exactly n identical houses on either side of the road.
//Naturally, you would like to find out the house number of the
//people on the other side of the street. The street looks something like this:
//
//Street
//1|   |6
//3|   |4
//5|   |2
//Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.
//Given your house number address and length of street n, give the house number on the opposite side of the street.
//
//overTheRoad(address, n)
//overTheRoad(1, 3) = 6

const overTheRoad = (address, n) => (n*2)+1-address
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------Fix string case(7LVL)--
//
//Description:
//In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to
//convert that string to either lowercase only or uppercase only based on:
//
//make as few changes as possible.
//if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
//For example:
//
//solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
//solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
//solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s){
  let letter = 0
  for (let i = 0; i < s.length; i++ ) {
    s[i].toUpperCase() === s[i] ? letter++ : letter--
  }
  return letter <= 0 ? s.toLowerCase() : s.toUpperCase()
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------Image host filename generator(6LVL)
//Description:
//You are developing an image hosting website.
//You have to create a function for generating random and unique image filenames.
//Create a function for generating a random 6 character string which will be used to access the photo URL.
//To make sure the name is not already in use, you are given access to an PhotoManager object.
//You can call it like so to make sure the name is unique
//
// at this point, the website has only one photo, hosted on the 'ABCDEF' url
//photoManager.nameExists('ABCDEF'); // returns true
//photoManager.nameExists('BBCDEF'); // returns false

function generateName() {
  const result = []
  for (let i = 0; i < 6; i++) {
    result.push(String.fromCodePoint(Math.floor(65 + Math.random() * 26)))
  }
  return photoManager.nameExists(result.join('')) ? generateName() : result.join('')  
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
