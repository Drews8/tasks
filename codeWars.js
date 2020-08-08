//--------------------------------------------------------------------------------------------------------------------------------------------Simple string reversal---------------
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
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
