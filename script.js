// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Число, яке потрібно звести в ступінь, передається як перший аргумент у функцію
// Ступінь передається як другий аргумент у функцію

function pow(num, degree){
    if(degree === 0){
        return 1;
    }
    else if(degree < 0){
        return 1 / pow(num, -degree);
    }
    else {
        return num * pow(num, degree - 1)
    };
};
console.log(pow(2,3));