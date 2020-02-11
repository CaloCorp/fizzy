function fizzy(num) {
  if (num % 3 === 0 && num % 5 !== 0){
  return 'Fizz'}

if (num % 5 === 0 && num % 3 !== 0){
  return 'Buzz'}

if (num % 5 === 0 && num % 3 === 0) {

  return 'FizzBuzz'}

  if (num % 5 !== 0 && num % 3 !== 0) {

    return num
}  
}
module.exports = {
  fizzy,
}