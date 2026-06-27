let money = 1000;
let stocks = 0;
let price = 100;

function update() {
    document.getElementById("money").textContent = money;
    document.getElementById("stocks").textContent = stocks;
    document.getElementById("price").textContent = price;
}

function showMessage(text) {
    document.getElementById("message").textContent = text;
}

function buy() {
    if (money >= price) {
        money -= price;
        stocks++;
        showMessage("✅ Вы купили акцию.");
    } else {
        showMessage("❌ Недостаточно денег.");
    }

    update();
    checkWin();
}

function sell() {
    if (stocks > 0) {
        money += price;
        stocks--;
        showMessage("💰 Вы продали акцию.");
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
            showMessage("🚀 Цена выросла на 100 €!");
        } else {
            showMessage("📉 Цена упала на 100 €!");
        }
    } else {
        showMessage("📅 Цена изменилась на " + change + " €");
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
            <h1>🎉 Поздравляем!</h1>
            <h2>Вы накопили 2000 €!</h2>
            <p>💼 Поздравляем с новой работой!</p>
            <p>Желаем успехов и больших достижений!</p>
        `;
    }
}

update();
