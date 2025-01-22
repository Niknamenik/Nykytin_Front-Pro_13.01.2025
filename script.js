let name= prompt('What is your name?');
alert('Hi, ' + name + '!' + ' How are you?')
let plus_1 = parseInt(prompt("Let's add two numbers. Input first one"))
let plus_2 = parseInt(prompt("Input second one"))
let sum = plus_1 + plus_2;
alert('The answer is: ' + sum);
let min_1 = parseInt(prompt("Let's subtract two numbers. Input first one"))
let min_2 = parseInt(prompt("Input second one"))
let subtract = min_1 - min_2;
alert('The answer is: ' + subtract);
let mult_1 = parseInt(prompt("Let's multiply two numbers. Input first one"))
let mult_2 = parseInt(prompt("Input second one"))
let multiply = mult_1 * mult_2;
alert('The answer is: ' + multiply);
let div_1 = parseInt(prompt("Let's divide two numbers. Input first one"))
let div_2 = parseInt(prompt("Input second one"))
let divide = div_1 / div_2;
alert('The answer is: ' + divide);
let comp_1 = prompt("Let's compaire two variables. Input first one:")
var comp_2 = prompt("Input second one:")
let compaire = comp_1 == comp_2;
compaire.toString();
alert('The result: ' + compaire);
let aver_1 = parseInt(prompt("Let's calculate the arithmetic mean! Input first one:"));
let aver_2 = parseInt(prompt("Input second one:"));
let aver_3 = parseInt(prompt("Input third one:"));
let average = (aver_1 + aver_2 + aver_3)/3;
alert('The answer is: ' + average);
let num = prompt('Enter five-digit number: ');
let num_1 = num.at(0)
let num_2 = num.at(1)
let num_3 = num.at(2)
let num_4 = num.at(-2)
let num_5 = num.at(-1)
num = num_1 + ' ' + num_2 + ' ' + num_3 + ' ' + num_4 + ' ' + num_5;
alert(num)