const prompt = require('prompt');

class FizzBuzz {
  constructor() {
    this.description = "Fizz buzz is a group word game for children to teach them about division. Players take turns to count incrementally, replacing any number divisible by three with the word 'fizz', and any number divisible by five with the word 'buzz', and any number divisible by both 3 and 5 with the word 'fizzbuzz'.";
  }

  start() {
    console.log("=== FizzBuzz ===");
    console.log(this.description);

    prompt.get([
      {
        name : "number",
        description : "Set number",
        type : "Number"
      }
    ], (err, { number }) => {
      /* Run FizzBuzz Program */
      this.run(number);

      /* Trigger event as a marker of the completion of the program */
      this.onFinish();
    });
  }

  run(number) {
    for ( let i = 1; i <= number; i++ ) {
      /* If number divisible 3 and 5 log FizzBuzz */
      if ( i % 3 === 0 && i % 5 === 0 ) {
        console.log("FizzBuzz");
      }
      /* If number just divisible 3 log Fizz */
      if ( i % 3 === 0 ) {
        console.log("Fizz");
      }
      /* If number just divisible 5 log Buzz */
      if ( i % 5 === 0 ) {
        console.log("Buzz");
      }
      /* Else log number */
      else {
        console.log(i);
      }
    }
  }
}

module.exports = FizzBuzz;