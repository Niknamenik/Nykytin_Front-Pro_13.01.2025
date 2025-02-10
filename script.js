// Вивести на сторінку в один рядок через кому числа від 10 до 20

let str = '';
for(let nmbr = 10; nmbr <= 20; nmbr ++ ){
    if(nmbr < 20){
        str += nmbr + ', ';
    }  
    else if (nmbr = 20){
        str += nmbr;
    }
    console.log(str);
};

// Вивести квадрати чисел від 10 до 20

let times;
for(sqr = 10; sqr <= 20; sqr ++){
    times = sqr * sqr;
    console.log(times);
};

// Вивести таблицю множення на 7

let tab = 7;
let res;
for(nmbr = 0; nmbr <= 10; nmbr ++){
    res = nmbr * tab;
    console.log(`${tab} * ${nmbr} = ${res}`)
};

// Знайти суму всіх цілих чисел від 1 до 15

let sum = 0 ;
for(let nmbr = 1; nmbr<=15; nmbr ++){
    sum += nmbr;
    console.log(sum);
};

// Знайти добуток усіх цілих чисел від 15 до 35

let summ = 0;
for(let nmbr = 15; nmbr <= 35; nmbr ++){
    summ += nmbr;
    console.log(summ);
};

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500

let sr = 0;
for(let nmbr = 1; nmbr <= 500; nmbr ++){
    sr += nmbr;
    if(nmbr === 500){
        console.log(sr / nmbr);
    }
};

// Вивести суму лише парних чисел у діапазоні від 30 до 80

let rep = 0;
let per;
for(nmb = 30; nmb <= 80; nmb ++){
    per = nmb % 2;
    if(per === 0){
        rep += nmb;
        console.log(rep)
    }
};

// Вивести всі числа в діапазоні від 100 до 200, які кратні 3

let ket;
for(nmb = 100; nmb <= 200; nmb ++){
    ket = nmb % 3;
    if(ket === 0){
        console.log(nmb)
    }
};

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let ten;
let nat = 100; // То саме натуральне число 
for(let num = 0; num <= nat; num++){
    let ten = nat % num;
    if(ten === 0){
        console.log(num);
    }
};

// Визначити кількість його парних дільників

let bir = 0;
for(let num = 0; num <= nat; num++){
    let ten = nat % num;
    if(ten === 0){
        bir +=1;
    }
};
console.log(bir)

// Знайти суму його парних дільників

let rib = 0;
for(let num = 0; num <= nat; num++){
    let ten = nat % num;
    if(ten === 0){
        rib += num;
    }
};
console.log(rib); 

// Надрукувати повну таблицю множення від 1 до 10

let arr = [];
for(let i = 0; i <= 10; i+=1){
    arr.push([]);
    for(let j = 0; j <= 10; j += 1){
        arr[i].push(j*i);
    };
};
console.table(arr);