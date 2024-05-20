// Функция для создания списка из массива элементов
function createList(array) {
    // Получаем ссылку на элемент <ul> списка
    let list = document.getElementById('list');
    
    // Используем метод map для создания массива строк - элементов списка
    let items = array.map(item => `<li>${item}</li>`);
    
    // Присваиваем HTML содержимое списка элементам
    list.innerHTML += items.join('');
}

// Примеры массивов для вывода на экран
let arr1 = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
let arr2 = ['1', '2', '3', 'sea', 'user', 23];
let arr3 = ['apple', 'banana', 'orange', 'grape', 'peach'];

// Вызываем функцию для создания списка из всех трех массивов
createList(arr1.concat(arr2).concat(arr3));
