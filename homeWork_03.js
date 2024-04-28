// Задание 1 – Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие?

// Массивы в JavaScript представляют собой структуры данных, которые могут содержать элементы разных типов и допускают гибкое добавление и удаление элементов. 
// Из-за этой гибкости они могут быть менее предсказуемыми, чем массивы в некоторых других языках программирования. 
// Это может привести к тому, что они становятся "неправильными" в смысле структурированности и более сложными для понимания.
// Особенности массивов, которые могут сделать их "неправильными": динамическая типизация, различная длина элементов, гибкие операции удаления и добавления элементов и т.д.

// Задание 2 – Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

// Используя bind 

const obj = { item: "some value" };

function logger() {
    console.log(`Hello World: ${this.item}`);
}

const bindLogger = logger.bind(obj);
bindLogger(); // Выведет: Hello world: some value

// Используя call

const obj1 = { item: "some value" };

function logger() {
    console.log(`Hello world: ${this.item}`);
}

logger.call(obj1);

// Используя apply

const obj2 = { item: "some value" };

function logger() {
    console.log(`Hello world: ${this.item}`);
}

logger.apply(obj2); 

// Задание 3.1
// - Создайте массив чисел и найдите его сумму

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Выведет: 15

// - Создайте массив строк и объедините их в одну строку

const strings = ["Hello", " ", "world", "!"];

const combinedString = strings.join('');

console.log(combinedString); // Выведет: Hello world!

// -  Найдите максимальный и минимальный элементы в массиве чисел

const numbers1 = [3, 6, 2, 8, 1, 5];

const max = Math.max(...numbers1);
const min = Math.min(...numbers1);

console.log('Максимальный элемент:', max); // Выведет: 8
console.log('Минимальный элемент:', min); // Выведет: 1

// Задание 3.2
// Реализуйте стек с использованием массива

class Stack {
    constructor() {
      this.items = []; // Массив для хранения элементов стека
    }
  
    // Добавление элемента в верхушку стека
    push(element) {
      this.items.push(element);
    }
  
    // Удаление элемента с верхушки стека и возврат удаленного элемента
    pop() {
      if (this.isEmpty()) {
        return "Underflow"; // Если стек пустой, вернуть сообщение об ошибке
      }
      return this.items.pop();
    }
  
    // Возврат верхушки стека (без удаления)
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Проверка, пуст ли стек
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Возврат размера стека
    size() {
      return this.items.length;
    }
  
    // Очистка стека
    clear() {
      this.items = [];
    }
  }
  
  // Пример использования стека
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.peek()); // Выведет: 30
  console.log(stack.pop()); // Выведет: 30
  console.log(stack.size()); // Выведет: 2
  console.log(stack.isEmpty()); // Выведет: false

// Имитируйте работу очереди на примере ожидания на кассе

class Queue {
    constructor() {
      this.customers = []; // Массив для хранения клиентов в очереди
    }
  
    // Добавление нового клиента в конец очереди
    enterQueue(customer) {
      this.customers.push(customer);
      console.log(`${customer} встал в очередь.`);
      this.displayQueue();
    }
  
    // Обработка следующего клиента в очереди (удаление из начала очереди)
    processNextCustomer() {
      if (this.isEmpty()) {
        console.log("Очередь пуста.");
        return;
      }
      const nextCustomer = this.customers.shift();
      console.log(`${nextCustomer} обслуживается.`);
      this.displayQueue();
    }
  
    // Вывод текущей очереди
    displayQueue() {
      console.log("Текущая очередь:", this.customers.join(', '));
    }
  
    // Проверка, пуста ли очередь
    isEmpty() {
      return this.customers.length === 0;
    }
  }
  
  // Создаем очередь клиентов
  const queue = new Queue();
  
  // Новые клиенты встают в очередь
  queue.enterQueue("Клиент 1");
  queue.enterQueue("Клиент 2");
  queue.enterQueue("Клиент 3");
  
  // Обслуживаем клиентов по очереди
  queue.processNextCustomer();
  queue.processNextCustomer();
  queue.processNextCustomer();
  queue.processNextCustomer(); // Пытаемся обслужить клиента, когда очередь пуста
  
// Бонус. Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

const myBind = function(func, context) {
    let bindArguments = [].slice.call(arguments, 2);
    return function() {
      let funcArguments = [].slice.call(arguments);

      return func.apply(context, bindArguments.concat(funcArguments));
    };
};


