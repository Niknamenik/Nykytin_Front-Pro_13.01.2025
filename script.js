function sumNumbers(a, b) {
    return a + b;
  }
  function powerSumFunction (fn, action = ''){
      return function (...arguments){    
        console.log(`Я вмію ${action} числа`);
        const result = fn(...arguments); 
        console.log(`Результат виклику функції:${result}`)
        return result
    }
  }
  const poweredSumFunc = powerSumFunction(sumNumbers, 'додавати');
  poweredSumFunc(5, 5)