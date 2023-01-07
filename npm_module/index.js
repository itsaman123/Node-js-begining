// const chalk=require("chalk");
  
// // Printing the text
// console.log(chalk.red("aayush"))
// console.log(chalk.red.underline("aayush"))
const validator=require("validator")
const res=validator.isEmail("thapa@gmail.com");
// console.log(chalk.foregroundColorNames.underline.inverse(res));
console.log(res)
console.log("false");