//*====================== завдання 1 =================*\\
const choiceDdrink = document.querySelector('.choice-drink')
const text = document.querySelector('.text')

choiceDdrink.addEventListener('change', ()=>{
    let msg = '';

     switch (choiceDdrink.value) {
        case "coffee":
            msg = "ви обрали каву"
             break;
         case "tea":
            msg = "ви обрали чай"
             break;
         case "juice":
            msg = "ви обрали сік"
            break;
     
         default:
             msg = "оберіть щось"
            break;
    }
    
    text.textContent = msg;
})
//*====================== завдання 2 =================*\\
function checkDay() {
            const day = document.getElementById('dayInput').value.trim().toLowerCase();
            const messageElement = document.getElementById('message');
            const weekdays = ["понеділок", "вівторок", "середа", "четвер", "п’ятниця"];
            const weekend = ["субота", "неділя"];
            
            // Перевірка дня тижня
            if (weekdays.includes(day)) {
                messageElement.textContent = "Це робочий день.";
            } else if (weekend.includes(day)) {
                messageElement.textContent = "Це вихідний день.";
            } else {
                messageElement.textContent = "Будь ласка, введіть правильний день тижня.";
            }
}
        
//*====================== завдання 3 =================*\\
function getSeason() {
            const month = parseInt(document.getElementById("monthInput").value);
            let season = "";

            if (month >= 1 && month <= 2 || month === 12) {
                season = "Зима";
            } else if (month >= 3 && month <= 5) {
                season = "Весна";
            } else if (month >= 6 && month <= 8) {
                season = "Літо";
            } else if (month >= 9 && month <= 11) {
                season = "Осінь";
            } else {
                season = "Неправильний номер місяця. Введіть число від 1 до 12.";
            }

            document.getElementById("output").textContent = season;
        }
//*====================== завдання 4 =================*\\
 function getDaysInMonth() {
            const month = parseInt(document.getElementById("monthInput").value);
            let days;

            switch (month) {
                case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                    days = 31;
                    break;
                case 4: case 6: case 9: case 11:
                    days = 30;
                    break;
                case 2:
                    days = "28 або 29 (високосний рік)";
                    break;
                default:
                    days = "Неправильний номер місяця. Введіть число від 1 до 12.";
            }

           document.getElementById("output").textContent =`У цьому місяці: ${days}.`;
        }
//*====================== завдання 5 =================*\\

function checkColor() {
            const color = document.getElementById('colorInput').value.trim().toLowerCase();
            const messageElement = document.getElementById('message');
            let message = '';

            switch(color) {
                case 'червоний':
                    message = 'Стоп';
                    break;
                case 'зелений':
                    message = 'Йти';
                    break;
                case 'жовтий':
                    message = 'Чекати';
                    break;
                default:
                    message = 'Введіть правильний колір: червоний, зелений або жовтий';
            }

            messageElement.textContent = message;
}
        
//*====================== завдання 6 =================*\\


function calculate() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const operation = document.getElementById('operation').value;
            const resultElement = document.getElementById('result');
            let result;

            // Перевірка на введення чисел
            if (isNaN(num1) || isNaN(num2)) {
                resultElement.textContent = 'Будь ласка, введіть коректні числа.';
                return;
            }

            // Виконання операції
            switch (operation) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        resultElement.textContent = 'Помилка: ділення на нуль!';
                        return;
                    }
                    result = num1 / num2;
                    break;
                default:
                    resultElement.textContent = 'Невідома операція!';
                    return;
            }

            resultElement.textContent = `Результат: ${result}`;
        }
    























