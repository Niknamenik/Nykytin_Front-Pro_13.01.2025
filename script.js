

function CreateAPerson (name, age){
    if(!name || age < 18){  
    }
    this.name = name;
    this.age = age;

    this.showInfo = function () {
        console.log(`Name:${name}, Age:${age}`);
    };
}

function CreateACar (brand, year, color, owner){
    this.brand = brand;
    this.year = year;
    this.color = color;
    this.owner = owner;

    this.showInfo = function (){
        console.log(`Car:${this.brand}, Year:${this.year}, Color:${this.color}, Owner:${this.owner.name}`);
    }
}

const personName = getPersonName ()
const personAge = getPersonAge ()

function getPersonName (){
    const personName = prompt("Введіть ім’я:");
    if(!personName){
        alert("Некоректні дані: ім'я обов'язкове");
        return getPersonName ()
    }
    return personName;
}
function getPersonAge (){
    const age = parseInt(prompt("Введіть вік:"));
    if(!age || age < 18){
        alert("Некоректні дані: Вік має бути ≥ 18");
        return getPersonAge ()
    }
    return age;
}

const person = new CreateAPerson(personName, personAge);

person.showInfo();

const brand = prompt("Марка авто:");
const color = prompt("Колiр авто:");
const year = parseInt(prompt("Рік випуску:"));

const car = new CreateACar(brand, color, year, person);
car.showInfo();