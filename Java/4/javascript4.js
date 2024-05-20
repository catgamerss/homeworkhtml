// Функция для создания нового пользователя
function createNewUser() {
    // Запрос имени и фамилии у пользователя
    let firstName = prompt('Введите ваше имя:');
    let lastName = prompt('Введите вашу фамилию:');
    
    // Создание объекта newUser с помощью введенных данных
    let newUser = {
        firstName: firstName,
        lastName: lastName,
        // Метод для получения логина
        getLogin: function() {
            // Получение первой буквы имени и объединение с фамилией в нижнем регистре
            return (this.firstName.charAt(0) + this.lastName).toLowerCase();
        }
    };
    
    return newUser;
}

// Создаем нового пользователя
let user = createNewUser();

// Получаем и выводим логин пользователя с помощью alert()
alert('Логин пользователя: ' + user.getLogin());
