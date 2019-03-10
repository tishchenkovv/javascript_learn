
// Переменные
let money,
    time,
    result;


// Проверка числа
do {
    var tempMoney   = prompt("Ваш бюджет на месяц");
    result          = parseFloat(tempMoney);
    money           = result;
}
while (isNaN(result));

// Проверка даты
do {
    let tempTime = prompt("Введите дату в формате YYYY-MM-DD");
    result = tempTime.match(/^\w{4}-\w{2}-\w{2}$/i);
    time = new Date(tempTime);
}
while (result == null);

// Объект
let appData = {
    moneyAppData: money,
    timeAppData: time,
    expenses: "",
    income: [],
    saving: false
};

// Ответы на вопросы
let arrAnswer   = [];
arrAnswer.push(prompt("Введите обязательную статью расходов в этом месяце"));
arrAnswer.push(prompt("Введите обязательную статью расходов в этом месяце"));
let answer      = arrAnswer.toString();

appData.expenses = JSON.stringify(answer);


// Вывод данных
let message = `Бюджет на ${appData.timeAppData.toLocaleDateString()} ${appData.moneyAppData} $ статьи расхода ${JSON.parse(appData.expenses)}`;
alert(message);









