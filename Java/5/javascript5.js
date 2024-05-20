// Функция для создания нового пользователя
function createNewUser() {
    // Запрос имени и фамилии у пользователя
    let firstName = prompt('Введите ваше имя:');
    let lastName = prompt('Введите вашу фамилию:');
    // Запрос даты рождения
    let birthday = prompt('Введите вашу дату рождения в формате dd.mm.yyyy:');
    
    // Создание объекта newUser с помощью введенных данных
    let newUser = {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        // Метод для получения возраста пользователя
        getAge: function() {
            // Разбиваем дату рождения на день, месяц и год
            let parts = this.birthday.split('.');
            // Получаем текущую дату
            let today = new Date();
            // Получаем год из текущей даты
            let currentYear = today.getFullYear();
            // Получаем год рождения пользователя
            let birthYear = parseInt(parts[2]);
            // Вычисляем возраст пользователя
            let age = currentYear - birthYear;
            // Проверка, был ли уже день рождения в текущем году
            let birthMonth = parseInt(parts[1]) - 1;
            let birthDay = parseInt(parts[0]);
            if (today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay)) {
                age--;
            }
            return age;
        },
        // Метод для получения пароля
        getPassword: function() {
            // Получение первой буквы имени в верхнем регистре
            let firstLetter = this.firstName.charAt(0).toUpperCase();
            // Получение фамилии в нижнем регистре
            let lastNameLower = this.lastName.toLowerCase();
            // Получение года рождения
            let year = this.birthday.split('.')[2];
            // Возвращение пароля
            return firstLetter + lastNameLower + year;
        }
    };
    
    return newUser;
}

// Создаем нового пользователя
let user = createNewUser();

// Формируем сообщение с информацией о пользователе
let message = `Имя: ${user.firstName}\nФамилия: ${user.lastName}\nДата рождения: ${user.birthday}\nВозраст: ${user.getAge()}\nПароль: ${user.getPassword()}`;

// Выводим информацию о пользователе с помощью alert()
alert(message);
