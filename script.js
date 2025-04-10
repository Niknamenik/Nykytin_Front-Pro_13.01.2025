

function CreateAPerson (name, age){
    if(!name || age < 18){  
        alert("Некоректні дані: ім'я обов'язкове, вік має бути ≥ 18");
    }
    this.name = name;
    this.age = age;

    this.showInfo = function () {
        console.log(`Name:${name}, Age:${age}`);
    };
}

function CreateACar (brand, year, color){
    this.brand = brand;
    this.year = year;
    this.color = color;
    this.owner = person;

    this.showInfo = function (){
        console.log(`Car:${this.brand}, Year:${this.year}, Color:${this.color}`);
        if(this.owner){
            console.log(`Owner: ${this.owner.name}, Age: ${this.owner.age}`);
        } else {
            console.log('This car has no owner');
        };
    }
}

const personName = prompt("Введіть ім’я:");
const age = parseInt(prompt("Введіть вік:"));

const person = new CreateAPerson(personName, age);

person.showInfo();

const brand = prompt("Марка авто:");
const color = prompt("Колiр авто:");
const year = parseInt(prompt("Рік випуску:"));

const car = new CreateACar(brand, color, year);
car.showInfo();