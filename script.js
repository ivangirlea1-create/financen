function checkWin() {
    if (money >= 2000) {
        document.querySelector(".game").innerHTML = `
            <h1>🎉 Поздравляем! 🎉</h1>
            <p>Вы накопили 2000 ₽!</p>
            <p>Поздравляем с новой работой и желаем успехов, карьерного роста и больших достижений! 🚀</p>
            <h2>💼 Удачи на новом месте!</h2>
        `;
    }
}function buy() {
    if (money >= price) {
        money -= price;
        stocks++;
        showMessage("Вы купили акцию.");
    } else {
        showMessage("Недостаточно денег.");
    }
    update();
    checkWin();
}

function sell() {
    if (stocks > 0) {
        money += price;
        stocks--;
        showMessage("Вы продали акцию.");
    } else {
        showMessage("У вас нет акций.");
    }
    update();
    checkWin();
}

function nextDay() {
    let change = Math.floor(Math.random() * 41) - 20;
    price += change;

    if (price < 10) {
        price = 10;
    }

    showMessage("Новый день! Цена изменилась на " + change + " ₽");
    update();
    checkWin();
}function nextDay() {
    // Обычное изменение цены от -20 до +20 рублей
    let change = Math.floor(Math.random() * 41) - 20;

    // Редкое событие: шанс примерно 5%
    if (Math.random() < 0.05) {
        change = Math.random() < 0.5 ? 100 : -100;
        showMessage(
            change > 0
            ? "🚀 Отличные новости! Цена выросла на 100 ₽!"
            : "📉 Плохие новости! Цена упала на 100 ₽!"
        );
    } else {
        showMessage("📅 Новый день. Цена изменилась на " + change + " ₽");
    }

    price += change;

    // Минимальная цена акции
    if (price < 10) {
        price = 10;
    }

    update();
    checkWin();
}
