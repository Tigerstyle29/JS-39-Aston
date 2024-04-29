// Задание 1. Какие бывают алгоритмы сортировок?

// Сортировка пузырьком (Bubble Sort)
// Сортировка выбором (Selection Sort)
// Сортировка вставками (Insertion Sort)
// Сортировка слиянием (Merge Sort)
// Быстрая сортировка (Quick Sort)
// Пирамидальная сортировка (Heap Sort)
// Сортировка расческой (Comb Sort)
// Сортировка Шелла (Shell Sort)
// Сортировка подсчетом (Counting Sort)
// Сортировка внешней сортировкой (External Sort)
// Сортировка бутылочного горлышка (Cocktail Shaker Sort)
// Сортировка подсчетом с основанием (Radix Sort)
// Гномья сортировка (Gnome Sort)
// Сортировка Ханойская (Stooge Sort)
// Турнирная сортировка (Tournament Sort)
// Блочная сортировка (Bucket Sort)
// Поразрядная сортировка (Radix LSD Sort)
// Комбинированная сортировка (Combining Sort)
// Карманная сортировка (Pigeonhole Sort)
// Сортировка разделением (Introsort)

// Задание 2. Прочитать про "Операторы и выражения, циклы в JS"

// Операторы - это символы, которые выполняют операции над данными.
// Выражения - это комбинации значений, переменных и операторов, которые вычисляются в определенное значение. 
// Циклы - это инструкции, которые позволяют выполнять один и тот же блок кода несколько раз.

// Задание 3. Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были доступны методы объекта Person. 
// Добавить метод logInfo чтоб он был доступен всем объектам.

// 1 вариант: 

const Person = {
    name: 'Max',
    logInfo() {
        console.log(this.name)
    }
};

// 2 вариант: 

    const Person2 = Object.create(Person);
    Person2.name = 'Max';
    Person2.age = 25;

// 3 вариант:

class Person {
    constructor() {
        this.name = 'Nikita';
    }
    logInfo() {
        console.log(this.name)
    }
}  

const Person2 = new Person();

// 4 вариант:

const Person = Object.create(Object.prototype, {name: {value: 'Nikita'}});

Person.logInfo = function(){
    console.log(this.name)
}

const Person2 = Object.create(Person);

// Задание 4. Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.

class Person {
    constructor(name) {
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName;
    }
  }
  
  class PersonThree extends Person {
    constructor(name) {
      super(name);
    }
  }
  
  const personThree = new PersonThree('Max');
  console.log(personThree.name);
  
  personThree.name = 'Sergey';
  console.log(personThree.name);

  // Бонус. 

  const firstSum = (arr, total) => {
    const result = [];
    const seen = new Set();

    for (let num of arr) {
        const complement = total - num;
        if (seen.has(complement)) {
            result.push(complement, num);
            break;
        }
        seen.add(num);
    }

    return result;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;

console.log(firstSum(arr, total)); // [4, 9]

// Этот алгоритм имеет линейную сложность O(n), где n - количество элементов в массиве. 