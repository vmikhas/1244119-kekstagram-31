// Функция для проверки длины строки

const checkStringLength = (string, length) => string.length <= length;

// Строка короче 20 символов
checkStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10); // false

// Функция для проверки, является ли строка палиндромом

const checkPalindrome = (string) => {
  const replaceString = string.replaceAll(' ', '');
  const resultString = replaceString.toLowerCase();

  let emptyString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    emptyString += resultString[i];
  }

  return emptyString === resultString;
};

// Строка является палиндромом
checkPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
checkPalindrome('ДовОд'); // true
// Это не палиндром
checkPalindrome('Кекс'); // false
// Это палиндром
checkPalindrome('Лёша на полке клопа нашёл '); // true

checkPalindrome('Тут как тут ');

// Дополнительное задание
