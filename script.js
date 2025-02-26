// Реалізуйте функцію generateKey(length, characters), що повертає рядок випадкових символів із набору characters довжиною length.

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey (length, characters) {
    let key = '';
    let max = characters.length;
    for(let i = 0; i < length; i ++){
        const randomInt = Math.floor(Math.random() * max);
        let keyElement = characters.slice(randomInt, randomInt + 1);
        key += keyElement;
    };
    return key;
};
console.log(generateKey(40, characters));