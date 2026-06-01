let player = {
    "currencies": {
        "money": 0,
        "power": 0
    },
    "money": {
        "perClick": 1
    }
};

let randomChance;


document.getElementById("shopButton").addEventListener(
    "click", () => {
        saveGame();
        window.location = "http://127.0.0.1:5500/shop.html";
})

document.getElementById("bossButton").addEventListener(
    "click", () => {
        saveGame();
        window.location = "http://127.0.0.1:5500/boss.html";
})
document.getElementById("bugElim").addEventListener(
    "click", () => {
        randomChance = Math.random();
        if (randomChance < 0.95) {
        player.currencies.money += 50000000000;
        document.getElementById("moneyOwned").textContent = player.currencies.money;
        }
})
document.getElementById("lizardElim").addEventListener(
    "click", () => {
        randomChance = Math.random();
        if (randomChance < 0.9) {
        if(player.currencies.power >= 10){
        player.currencies.money += 30;
        document.getElementById("moneyOwned").textContent = player.currencies.money;
        }}

        else {
        if(player.currencies.power >= 10){
        player.currencies.power -= 1;
        document.getElementById("powerOwned").textContent = player.currencies.power;
        }}})


document.getElementById("hogElim").addEventListener(
    "click", () => {
        randomChance = Math.random();
        if (randomChance < 0.85) {
        if(player.currencies.power >= 100){
        player.currencies.money += 100;
        document.getElementById("moneyOwned").textContent = player.currencies.money;
        }}

        else {
        if(player.currencies.power >= 100){
        player.currencies.power -= 5;
        document.getElementById("powerOwned").textContent = player.currencies.power;
        }}})
document.getElementById("kangarooElim").addEventListener(
    "click", () => {
        randomChance = Math.random();
        if (randomChance < 0.8) {
        if(player.currencies.power >= 1000){
        player.currencies.money += 500;
        document.getElementById("moneyOwned").textContent = player.currencies.money;
        }}

        else {
        if(player.currencies.power >= 1000){
        player.currencies.power -=15;
        document.getElementById("powerOwned").textContent = player.currencies.power;
        }}})
document.getElementById("bullElim").addEventListener(
    "click", () => {
        randomChance = Math.random();
        if (randomChance < 0.75) {
        if(player.currencies.power >= 10000){
        player.currencies.money += 1000;
        document.getElementById("moneyOwned").textContent = player.currencies.money;
        }}

        else {
        if(player.currencies.power >= 10000){
        player.currencies.power -= 35;
        document.getElementById("powerOwned").textContent = player.currencies.power;
        }}})

document.getElementById("polarBearElim").addEventListener(
    "click", () => {
        randomChance = Math.random();
        if (randomChance < 0.7) {
        if(player.currencies.power >= 100000){
        player.currencies.money += 5000;
        document.getElementById("moneyOwned").textContent = player.currencies.money;
        }}

        else {
        if(player.currencies.power >= 5000){
        player.currencies.power -= 75;
        document.getElementById("powerOwned").textContent = player.currencies.power;
        }}})

window.addEventListener("DOMContentLoaded", () => {
    
    
    const textElement = document.getElementById("labelBug");

    if (textElement) {
        if (player.currencies.power >= 0) {
            textElement.style.color = "rgb(0, 184, 0)";
        } else {
            textElement.style.color = "rgb(184, 2, 2)"; 
        }
    } else {
        console.error("HTML element 'labelBug' was still not found!");
    }

});

window.addEventListener("DOMContentLoaded", () => {
    
    
    const textElement = document.getElementById("labelLizard");

    if (textElement) {
        if (player.currencies.power >= 10) {
            textElement.style.color = "rgb(0, 184, 0)";
        } else {
            textElement.style.color = "rgb(184, 2, 2)"; 
        }
    } else {
        console.error("HTML element 'labelLizard' was still not found!");
    }

});

window.addEventListener("DOMContentLoaded", () => {
    
    
    const textElement = document.getElementById("labelHog");

    if (textElement) {
        if (player.currencies.power >= 100) {
            textElement.style.color = "rgb(0, 184, 0)";
        } else {
            textElement.style.color = "rgb(184, 2, 2)"; 
        }
    } else {
        console.error("HTML element 'labelHog' was still not found!");
    }

});

window.addEventListener("DOMContentLoaded", () => {
    
    
    const textElement = document.getElementById("labelKangaroo");

    if (textElement) {
        if (player.currencies.power >= 1000) {
            textElement.style.color = "rgb(0, 184, 0)";
        } else {
            textElement.style.color = "rgb(184, 2, 2)"; 
        }
    } else {
        console.error("HTML element 'labelKangaroo' was still not found!");
    }

});

window.addEventListener("DOMContentLoaded", () => {
    
    
    const textElement = document.getElementById("labelBull");

    if (textElement) {
        if (player.currencies.power >= 10000) {
            textElement.style.color = "rgb(0, 184, 0)";
        } else {
            textElement.style.color = "rgb(184, 2, 2)"; 
        }
    } else {
        console.error("HTML element 'labelBull' was still not found!");
    }

});

window.addEventListener("DOMContentLoaded", () => {
    
    
    const textElement = document.getElementById("labelPolarBear");

    if (textElement) {
        if (player.currencies.power >= 100000) {
            textElement.style.color = "rgb(0, 184, 0)";
        } else {
            textElement.style.color = "rgb(184, 2, 2)"; 
        }
    } else {
        console.error("HTML element 'labelPolarBear' was still not found!");
    }

});


let storedData = localStorage.getItem("playerData");
if(storedData){
    player = JSON.parse(storedData);
    document.getElementById("moneyOwned").textContent = player.currencies.money;
    document.getElementById("powerOwned").textContent = player.currencies.power;
}

function saveGame(){
    localStorage.setItem('playerData', JSON.stringify(player));
}