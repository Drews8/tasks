//--------------------------------------------------------------------------------------------------------------------------------------------------Vowel Count(7LVL)------------
//Description:
//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.

const getCount = s => s.split('').filter(item => 'aeiou'.includes(item)).length

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
//-------------------------------------------------------------------------------------------------------------------------------------------------------Next bigger number(4LVL)
//Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
//
//nextBigger(num: 12)   // returns 21
//nextBigger(num: 513)  // returns 531
//nextBigger(num: 2017) // returns 2071
//
//If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

function nextBigger(number) {
  let result = Array.from(number.toString()).map(Number)
  for (let i = result.length - 1; i >= 0; i--) {  
    if (result[i - 1] < result[i]) {
      let changeNum = i
        for (let j = i; j < result.length; j++) {
          if (result[i-1] < result[j] && result[j] < result[changeNum]) {
            changeNum = j
          }
        }
      let tmp = result[changeNum]   
      result[changeNum] = result[i-1]
      result[i-1] = tmp

      let rightSide = result.slice(i)
      rightSide.sort((a, b) => a - b)
      return +(result.slice(0, i).join('') + rightSide.join(''))
    }
  }
  return -1
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------Simple Fun #27: Rectangle Rotation(4LVL)
//A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane.
//Its center (the intersection point of its diagonals) coincides with the point (0, 0),
//but the sides of the rectangle are not parallel to the axes; instead, they are forming 45 degree angles with the axes.
//
//How many points with integer coordinates are located inside the given rectangle (including on its sides)?
//P.S. For a = 6 and b = 4, the output should be 23

function rectangleRotation(a, b) {
  s = Math.sqrt(2)
  let result = (Math.floor(a / s) + 1) * (Math.floor(b / s) + 1) + (Math.floor(a / s)) * (Math.floor(b / s))
  return result % 2 === 1 ? result : --result
  
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------Make a spiral(3LVL)
//Your task, is to create a NxN spiral with a given size.
//For example, spiral with size 5 should look like this:
//
//00000
//....0
//000.0
//0...0
//00000
//and with the size 10:
//
//0000000000
//.........0
//00000000.0
//0......0.0
//0.0000.0.0
//0.0..0.0.0
//0.0....0.0
//0.000000.0
//0........0
//0000000000
//Return value should contain array of arrays, of 0 and 1, for example for given size 5 result should be:
//
//[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]

const spiralize = function(size) {
  const result = Array(size).fill(null).map(() => Array(size).fill(1))
  const directions = Array(Math.ceil(size/4)).fill(['right', 'down', 'left', 'up']).reduce((acc, val) => acc.concat(val), []);
  directions.length = size - 1
  
  let length = size - 1
  let startPosX = 0, startPosY = 1
  let endPosX = 0, endPosY = 1
  const odd = size % 2
  for (let i  = size - 1; i > 0; i--) {
  
      if (!((i + odd) % 2) && size > 5) {
        i === size - 2 ? length-- : length -= 2
      } else if (!((i) % 2) && size <= 5) {
        if (i === size - 1) {
          i--
        } else {
          length--
        }
      }
    
    switch(directions.shift()) {
      
      case 'right':
        for (endPosX = startPosX + length - 1; startPosX <= endPosX; startPosX++) {
          result[startPosY][startPosX] = 0
        }
        startPosX--
        break

      case 'down':
        for (endPosY = startPosY + length - 1; startPosY <= endPosX; startPosY++) {
          result[startPosY][startPosX] = 0
        }
        startPosY--
        break

      case 'left':
        for (endPosX = startPosX - length + 1; startPosX >= endPosX; startPosX--) {
          result[startPosY][startPosX] = 0
        }
        startPosX++
        break

      case 'up':
        for (endPosY = startPosY - length + 1; startPosY >= endPosY; startPosY--) {
          result[startPosY][startPosX] = 0
        }
        startPosY++
        break
    } 
  }
  return result
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
