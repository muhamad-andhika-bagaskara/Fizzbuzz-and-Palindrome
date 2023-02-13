const prompt = require('prompt');
const FizzBuzz = require("./src/Apps/FizzBuzz");
const Palindrome = require("./src/Apps/Palindrome");


/* Start the prompt */
prompt.start();

const programs = [
  new FizzBuzz(),
  new Palindrome()
];


(function runPrograms() {
  console.log("List of Programs");
  programs.forEach(({ constructor : { name } }, idx) => console.log(`${idx + 1}. ` + name));
  console.log("3. Close program");

  prompt.get([
    {
      name : "number",
      description : "Select program by number",
      type : "Number"
    }
  ], function (err, { number }) {
    /* If the input number is equal to 3, it means closing the program */
    if ( number === 3 ) return console.log("Program closed")

    const Program = programs[number - 1];

    /* If Program not found! */
    if ( !Program ) {
      console.log("Program not found");
      /*
        Recursion Function
        re-run the program function
      */
      runPrograms();

      return
    };

    /* Event handler when the program finishes */
    Program.onFinish = runPrograms;

    Program.start();
  });
})();