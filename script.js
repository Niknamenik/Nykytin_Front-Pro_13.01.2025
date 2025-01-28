let year = prompt('Вкажiть цифрами рiк народження');
var age;
var city = prompt('Вкажiть мiсто в яскому проживаєте?');
var sport = prompt('Вкажiть улюблений вид спорту');
var contry;
var sportTrue;
if(year == undefined || year == null || year.trim() == ''){
    var age = ' - Шкода, що Ви не захотіли ввести рiк народження!';
}
else{ 
    var age = '- Вам ' + (2025 - year) + ' рокiв!';
};
if(city == undefined || city == null || city.trim() == ''){
    var contry = 'Шкода, що Ви не захотіли ввести своє місто! ';
    var cityTrue = ' ';
}
else if(city.toUpperCase() === 'КИЇВ' || city.toUpperCase() === 'ВАШИНГТОН' || city.toUpperCase() === 'ЛОНДОН'){
    var contry = "Ви живете у столиці";    
    if(city.toUpperCase() === 'КИЇВ'){  
        var cityTrue =' Укараїни ';
    };
    if(city.toUpperCase() === 'ВАШИНГТОН'){  
        var cityTrue = ' США ';
    };
    if(city.toUpperCase() === 'ЛОНДОН'){  
        var cityTrue = ' Великої Британiї ';
    };
}
else{
    var contry = 'Ви живете у місті ';
    var cityTrue = city;
};
if(sport == undefined || sport == null || sport.trim() == ''){
    var sportTrue = 'Шкода, що Ви не захотіли ввести вид спорту!';
    var champ = ' ';
}
else if(sport.toUpperCase() === 'ФУТБОЛ' || sport.toUpperCase() === 'БАСКЕТБОЛ' || sport.toUpperCase() === 'БОКС'){
    var sportTrue = 'Круто! Хочеш стати як ';
    if(sport.toUpperCase() === 'ФУТБОЛ'){
        var champ = 'Леонель Мессi';
    };
    if(sport.toUpperCase() === 'БАСКЕТБОЛ'){
        var champ = 'Майкл Джордан';
    };
    if(sport.toUpperCase() === 'БОКС'){
        var champ = 'Майк Тайсон';
    };
}
else{
    var sportTrue = 'Круто що ти вибрав ';
    var champ = sport;
};
alert(age + '\n - ' + contry + cityTrue + '\n - ' + sportTrue + champ);