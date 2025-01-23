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
// let num = prompt('Enter five-digit number: ');
// let num_1 = num.at(0)
// let num_2 = num.at(1)
// let num_3 = num.at(2)
// let num_4 = num.at(-2)
// let num_5 = num.at(-1)
// num = num_1 + ' ' + num_2 + ' ' + num_3 + ' ' + num_4 + ' ' + num_5;
// alert(num)
let five = parseInt(prompt('Enter five-digit number: '));
if (five < 10000 || five > 99999){
    alert('Enter FIVE-digit number: ');
} 
let four = String(five % 10);
let three = String((five % 100 - four)/10)
let two = String((five % 1000 - three * 10 - four)/100)
let one = String((five % 10000- two * 100 - three * 10 - four)/1000)
let zero = String((five % 100000 - one * 1000 - two * 100 - three * 10 - four)/10000)
let result = zero + ' ' + one + ' ' + two + ' ' + three + ' ' + four;

console.log(result)