/**
 * Выводит каждый элемент массива в консоль с префиксом "Element:".
 * Формат вывода: "Element: {индекс}: value {значение}"
 * 
 * @template T
 * @param {Array} array - Массив для вывода
 * @returns {void} Функция ничего не возвращает
 * 
 * @example
 * printArray([1, 2, 3]);
 * // Вывод:
 * // Element: 0: value 1
 * // Element: 1: value 2
 * // Element: 2: value 3
 */
function printArray(array){

    for (let i = 0; i < array.length; i++){
        console.log(`Element: ${i}: value ${array[i]}`);
    }
    
}

/**
 * Выводит каждый элемент массива в консоль с префиксом "Element:".
 * Формат вывода: "Element: {индекс}: value {значение}"
 * 
 * @template T
 * @param {Array} array - Массив для вывода
 * @returns {void} Функция ничего не возвращает
 *
 * @example
 * printArray1(['a', 'b', 'c']);
 * // Вывод:
 * // 0:  a
 * // 1:  b
 * // 2:  c
 */
function printArray1(array){

    for (let i = 0; i < array.length; i++){
        console.log(`${i}:  ${array[i]}`);
    }
    
}

/**
 * Перебирает элементы массива и выполняет переданную функцию для каждого элемента.
 * 
 * @param {Array} array - Массив для перебора
 * @param {Function} callback - Функция, которая вызывается для каждого элемента
 * @returns {void} Функция ничего не возвращает
 * 
 * @example
 * forEach([1, 2, 3], function(item, index) {
 *     console.log(item);
 * });
 */
function forEach(array, callback){

    for (let i = 0; i < array.length; i++){
        callback(array[i], i, array);
    }
}

forEach([1, 2, 3], (element, index, array) => {
  console.log(`Element: ${element}, Index: ${index}`);
});

/**
 * Создает новый массив с результатами вызова переданной функции для каждого элемента массива.
 * 
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция, которая вызывается для каждого элемента
 * @param {number} callback.index - Индекс текущего элемента
 * @param {Array} callback.array - Исходный массив
 * @returns {Array} Новый массив с преобразованными элементами
 * 
 * @example
 * const numbers = [1, 2, 3];
 * const squared = map(numbers, (element) => element * element);
 * console.log(squared); // [1, 4, 9]
 */
function map(array, callback){

    const result = [];

    for (let i = 0; i < array.length; i++){
        result.push(callback(array[i], i, array));
    }
    return result;
}


/**
 * Создает новый массив со всеми элементами, прошедшими проверку в переданной функции.
 * 
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция проверки, которая возвращает true или false
 * @param {number} callback.index - Индекс текущего элемента
 * @param {Array} callback.array - Исходный массив
 * @returns {Array} Новый массив с элементами, прошедшими проверку
 * 
 * @example
 * const number = [1, 2, 3, 4, 5];
 * const evenNumbers = filter(number, (element) => element % 2 === 0);
 * console.log(evenNumbers); // [2, 4]
 */
function filter(array, callback){

    const result = [];

    for (let i = 0; i < array.length; i++){
        
        if (callback(array[i], i, array)){
            result.push(array[i]);
            
        } 
    }
    return result;
}


/**
 * Возвращает первый элемент массива, который удовлетворяет условию переданной функции.
 * Если ни один элемент не подходит, возвращает undefined.
 * 
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция проверки, которая возвращает true или false
 * @param {number} callback.index - Индекс текущего элемента
 * @param {Array} callback.array - Исходный массив
 * @returns {*|undefined} Первый подходящий элемент или undefined, если элемент не найден
 * 
 * @example
 * const numbe = [1, 2, 3, 4, 5];
 * const firstEven = find(numbe, (element) => element % 2 === 0);
 * console.log(firstEven); // 2
 */ 
function find(array, callback) {

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }

    return undefined;
}


/**
 * Проверяет, удовлетворяет ли хотя бы один элемент массива условию переданной функции.
 * Возвращает true, если хотя бы один элемент прошел проверку, иначе false.
 * 
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция проверки, которая возвращает true или false
 * @param {number} callback.index - Индекс текущего элемента
 * @param {Array} callback.array - Исходный массив
 * @returns {boolean} true, если хотя бы один элемент прошел проверку, иначе false
 * 
 * @example
 * const numb = [1, 2, 3, 4, 5];
 * const hasEven = some(numb, (element) => element % 2 === 0 );
 * console.log(hasEven); // true
 */
function some(array, callback){

    for (let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)){
            return true;
        } 
    }
        return false;

}

/**
 * Проверяет, удовлетворяют ли все элементы массива условию переданной функции.
 * Возвращает true, если все элементы прошли проверку, иначе false.
 * 
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция проверки, которая возвращает true или false
 * @param {number} callback.index - Индекс текущего элемента
 * @param {Array} callback.array - Исходный массив
 * @returns {boolean} true, если все элементы прошли проверку, иначе false
 * 
 * @example
 * const num= [2, 4, 6];
 * const allEven = every(num, (element) => element % 2 === 0);
 * console.log(allEven); // true
 */
function every(array, callback){

    for (let i = 0; i < array.length; i++){
        
        if (!callback(array[i], i, array)){
            return false;
        } 
    }
      return true;  

}
