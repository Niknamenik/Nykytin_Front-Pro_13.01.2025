// Написати функцію, яка приймає один параметр. При першому виклику вона запам'ятовує його, при другому — підсумовує переданий параметр з тим, що передали перший раз і тд. Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28

function sumFunc (){
    let  total = 0;
    return function (x){
        total += x;
        return total;
    }
};
let sum = sumFunc();
console.log(sum(3));
console.log(sum(5)); 
console.log(sum(20));

// Даний масив з елементами різних типів. Створити функцію, яка вираховує середнє арифметичне лише числових елементів даного масиву.
let arr = ['str', 'dfg', 45, 67, 456, {name:'fuck'}, {name:'suck'}, 43, 23];

function averageFunc (arr)
{
    let arrNumbers = arr.filter((element) => typeof(element) === 'number')
    let devider = arrNumbers.length;
    let sum = arrNumbers.reduce((a,b) => a + b, 0)
    let averageRes = sum / devider;
    console.log(averageRes);

};
let average = averageFunc(arr);
console.log(average);

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x та y, рядок znak. У змінній znak може бути значення +, -, *, /, %, ^ (ступінь). Вивести результат математичної дії, вказаної у змінній znak. Обидва числа та знак виходять від користувача.

function doMath(x, znak, y){
    switch(znak){
        case '+':
            result = x + y;
            break;  
        case '-':
            result = x - y;
            break;  
        case '*':
            result = x * y;
            break;  
        case '/':
            result = x / y;
            break;  
        case '%':
            result = x % y;
            break;  
        case '^':
            result = Math.pow(x, y);
            break;  
        default:
            result = 'operator is not defined';
    }
    return result;
};
let math = doMath(5, '?', 5);
console.log(math);


// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву та внутрішніх масивів задає користувач. Значення всіх елементів масивів задає користувач. 

function arrayFunc (length, deep, ...elements){
    let arr1 = [];
    for(let i = 0; i < length; i ++){
        let arr2 = [];
        for(let i = 0; i < deep; i ++){
            arr2.push(elements[i])
        };
        arr1.push(arr2);
    }
    return arr1;
};
let array = arrayFunc (3, 3, 9,8,7,6,5,4,3,2,1);
console.log(array);

// Створити функцію, яка видаляє з рядка всі символи, які ми передали другим аргументом. 'func("hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач

function removeFunc(string, symbols){
    for(let i = 0; i < symbols.length; i ++){
        string = string.replace(new RegExp(symbols[i], 'g'), '');
    };
    return string;
};

let remove = removeFunc("hello world", ['l', 'd']);
console.log(remove); 