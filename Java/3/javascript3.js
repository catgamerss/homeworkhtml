// Функция для выполнения математических операций
function calculate(num1, num2, operation) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // Проверка деления на 0
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Деление на ноль!';
            }
        default:
            return 'Неправильная операция!';
    }
}

// Функция для ввода числа через модальное окно
function enterNumber(message) {
    let input = prompt(message);
    // Преобразование строки в число, если введено не число или отменено, возвращает null
    return parseFloat(input);
}

// Получаем числа от пользователя
let number1 = enterNumber('Введите первое число:');
let number2 = enterNumber('Введите второе число:');

// Получаем операцию от пользователя
let operation = prompt('Введите операцию (+, -, *, /):');

// Проверка на ввод чисел и операции
if (!isNaN(number1) && !isNaN(number2) && operation) {
    // Выполняем операцию
    let result = calculate(number1, number2, operation);
    // Выводим результат с помощью alert()
    alert(`Результат: ${result}`);
} else {
    alert('Некорректный ввод!');
}
