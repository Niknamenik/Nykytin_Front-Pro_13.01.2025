let first;
let second;
if (first > second){
    console.log('first is bigger')
}
if(first < second){
    console.log('second is bigger')
}
else{
    console.log('borh are equal')
};
//////////////////////
let km;
let ft;
let ftToKm = ft * 0.000305;
if(km < ft){
    console.log('ft is longer')
}
if(km > ft ){
    console.log('km is longer')
}
else{
    console.log('equal')
}
////////////////////////
let a;
let b;
if(a % b === 0){
    console.log('b is divider')
}
if(b % a === 0){
    console.log('a is divider')
}
else{
    console.log('division with remainder')
}
/////////////
let some;
let theLast = some % 10;
console.log(theLast)
if (theLast % 2 === 0){
    console.log('even number')
}
else{
    console.log('number is not even')
};
/////////////////
let binNumber;
let two = binNumber % 10;
let one = (binNumber % 100 - two)/10;
if(one > two){
    console.log('one is bigger')
}
if(two > one){
    console.log('two is bigger')
}
else{
    console.log('onw and two are even')
};
//////////////////
let threedigit = 123;
let threeT = threedigit % 10;
let threeTwo = (threedigit % 100 - threeT)/10;
let threeOne = (threedigit % 1000 - (threeTwo * 10) - threeT)/100;
let pare = threeOne + threeTwo + threeT;
let mult = threeOne * threeTwo * threeT;
if (pare % 2 === 0){
    console.log('paired');
}
else {
    console.log('notpaired')
}
if(pare % 5 === 0){
    console.log('multiple of five')
}
else{
    console.log('not multiple of five')
}
if(mult > 100){
    console.log('more then 100')
}
else{
    console.log('less or even 100')
}
/////////////
if(threeOne === threeTwo && threeTwo === threeT){
    console.log('three of numbers are even')
}
else{
    console.log('three of numbers are not even')
}
if (threeOne === threeTwo || threeOne === threeT || threeTwo === threeT){
    console.log('some of three numbers are even')
}
else {
    console.log('none of the three numbers are equal to each other')
}
////////////////