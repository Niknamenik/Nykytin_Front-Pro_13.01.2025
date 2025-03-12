// Вам потрібно написати функцію, яка як параметр приймає функцію і додає їй можливість кешувати дзвінки.
// Ідея полягає в тому, що при виклику функції з однаковими аргументами немає сенсу викликати функцію щоразу, достатньо зберігати дані про результати виклику.
// Зберігати потрібно останні 10 дзвінків.

function makeCall(number) {
    console.log(`Виклик функції для: ${number}`);
    return number;
}

function callNumbers(fn) {
    let cache = new Map();

    return function (number) {
        debugger
        if (cache.has(number)) {
            return cache.get(number)
        }

        const result = fn(number)
        cache.set(number, result)

        if (cache.size > 10) {
            const firstKey = cache.keys().next().value
            cache.delete(firstKey)
        }

        console.log(`Останні 10: ${Array.from(cache.keys())}`)
        return result
    };
}

const cachedNumbers = callNumbers(makeCall);
console.log(cachedNumbers(945694609));
console.log(cachedNumbers(945694609));
console.log(cachedNumbers(123456789));