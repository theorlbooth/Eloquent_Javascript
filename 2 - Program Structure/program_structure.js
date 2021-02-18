
// * Looping a triangle 
// * ------------------

let print = '#'

while (print.length < 8) {
  console.log(print)
  print += '#'
}

// * FizzBuzz
// * --------

for ( let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}


// * Chessboard
// * ----------

const size = 8
let string = ''

for (let i = 0; i < size; i++) {
  if (i % 2 !== 0) {
    for (let y = 0; y < size; y++) {
      if (y % 2 !== 0) {
        string += '#'
      } else {
        string += ' '
      }
    }
    string += '\n'
  } else {
    for (let y = 0; y < size; y++) {
      if (y % 2 === 0) {
        string += '#'
      } else {
        string += ' '
      }
    }
    string += '\n'
  }
}
console.log(string)