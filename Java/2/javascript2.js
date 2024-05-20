// javascript2.js

// Запросить у пользователя начало и конец диапазона
const startRange = parseInt(prompt("Введите начало диапазона:"));
const endRange = parseInt(prompt("Введите конец диапазона:"));

// Проверить, что введены числа
if (!isNaN(startRange) && !isNaN(endRange)) {
    // Объявить массив для хранения чисел кратных 5
    const multiplesOf5 = [];

    // Найти числа кратные 5 в заданном диапазоне
    for (let i = startRange; i <= endRange; i++) {
        if (i % 5 === 0) {
            multiplesOf5.push(i);
        }
    }

    // Вывести результат
    if (multiplesOf5.length > 0) {
        alert("Числа кратные 5 в диапазоне от " + startRange + " до " + endRange + ":\n" + multiplesOf5.join(", "));
    } else {
        alert("В заданном диапазоне нет чисел кратных 5.");
    }
} else {
    alert("Ошибка ввода. Пожалуйста, введите числа.");
}
