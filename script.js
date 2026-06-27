let money = 1000;
let stocks = 0;
let price = 100;
let totalSpent = 0;

function update() {
    document.getElementById("money").textContent = money.toFixed(2);
    document.getElementById("stocks").textContent = stocks;
    document.getElementById("price").textContent = price.toFixed(2);

    let averagePrice = stocks > 0
        ? (totalSpent / stocks).toFixed(2)
        : 0;

    document.getElementById("averagePrice").textContent = averagePrice;
}

function showMessage(text) {
    document.getElementById("message").textContent = text;
}

function buy() {
    if (money >= price) {
        money -= price;
        stocks++;
        totalSpent += price;

        showMessage("✅ Вы купили акцию за " + price.toFixed(2) + " €");
    } else {
        showMessage("❌ Недостаточно денег.");
    }

    update();
    checkWin();
}

function sell() {
    if (stocks > 0) {
        const averagePrice = totalSpent / stocks;

        money += price;
        stocks--;
        totalSpent -= averagePrice;

        const profit = price - averagePrice;

        if (profit > 0) {
            showMessage("💰 Продано с прибылью +" + profit.toFixed(2) + " €");
        } else if (profit < 0) {
            showMessage("📉 Продано с убытком " + profit.toFixed(2) + " €");
        } else {
            showMessage("➖ Продано без прибыли и убытка.");
        }
    } else {
        showMessage("❌ У вас нет акций.");
    }

    update();
    checkWin();
}

function nextDay() {
    let change = Math.floor(Math.random() * 41) - 20;

    // Очень редкое изменение на ±100 €
    if (Math.random() < 0.05) {
        change = Math.random() < 0.5 ? 100 : -100;

        if (change > 0) {
            showMessage("🚀 Важные новости! Цена выросла на 100 €!");
        } else {
            showMessage("📉 Важные новости! Цена упала на 100 €!");
        }
    } else {
        showMessage("📅 Новый день: цена изменилась на " + change + " €");
    }

    price += change;

    if (price < 10) {
        price = 10;
    }

    update();
    checkWin();
}

function checkWin() {
    if (money >= 2000) {
        document.querySelector(".game").innerHTML = `
            <h1>🎉 Поздравляем! 🎉</h1>
            <h2>💶 Вы накопили 2000 €!</h2>
            <p>💼 Поздравляем с новой работой!</p>
            <p>Желаем успехов, карьерного роста и больших достижений! 🚀</p>
            <h2>Удачи на новом месте!</h2>
        `;
    }
}

update();
