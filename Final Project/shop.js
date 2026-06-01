let player = {
    "currencies": {
        "money": 0,
        "power": 0
    },
    "money": {
        "perClick": 1
    }
};

document.getElementById("arenaButton").addEventListener(
    "click", () => {
        saveGame();
        window.location = "http://127.0.0.1:5500/arena.html";
})

document.getElementById("bossButton").addEventListener(
    "click", () => {
        saveGame();
        window.location = "http://127.0.0.1:5500/boss.html";
})

document.getElementById("daggerBuy").addEventListener(
    "click", () => {
        randomChance = Math.random();
        if (randomChance < 0.99) {
        if(player.currencies.money >= 50){
        player.currencies.power += 2;
        player.currencies.money -= 50;
        document.getElementById("moneyOwned").textContent = player.currencies.money;
        document.getElementById("powerOwned").textContent = player.currencies.power;
        }}

        else {
        if(player.currencies.money >= 50){
        player.currencies.money -= 100;
        document.getElementById("powerOwned").textContent = player.currencies.power;
        document.getElementById("moneyOwned").textContent = player.currencies.money;
        alert("Scammer Get Scammed lol, you just lost $100");
        }}})

document.getElementById("swordBuy").addEventListener(
    "click", () => {
        randomChance = Math.random();
        if (randomChance < 0.99) {
        if(player.currencies.money >= 1000){
            player.currencies.money -= 1000;
            player.currencies.power += 10;
            document.getElementById("powerOwned").textContent = player.currencies.power;
            document.getElementById("moneyOwned").textContent = player.currencies.money;
            saveGame();
        }}

        else {
        if(player.currencies.money >= 1000){
        player.currencies.money -= 2000;
        document.getElementById("powerOwned").textContent = player.currencies.power;
        document.getElementById("moneyOwned").textContent = player.currencies.money;
        alert("Scammer Get Scammed lol, you just lost $2,000");
        }}})

document.getElementById("musketBuy").addEventListener(
    "click", () => {
        randomChance = Math.random();
        if (randomChance < 0.99) {
        if(player.currencies.money >= 10000){
            player.currencies.money -= 10000;
            player.currencies.power += 50;
            document.getElementById("powerOwned").textContent = player.currencies.power;
            document.getElementById("moneyOwned").textContent = player.currencies.money;
            saveGame();
        }}

        else {
        if(player.currencies.money >= 10000){
        player.currencies.money -= 20000;
        document.getElementById("powerOwned").textContent = player.currencies.power;
        document.getElementById("moneyOwned").textContent = player.currencies.money;
        alert("Scammer Get Scammed lol, you just lost $20,000");
        }}})

document.getElementById("laserBuy").addEventListener(
    "click", () => {
        randomChance = Math.random();
        if (randomChance < 0.99) {
        if(player.currencies.money >= 100000){
            player.currencies.money -= 100000;
            player.currencies.power += 150;
            document.getElementById("powerOwned").textContent = player.currencies.power;
            document.getElementById("moneyOwned").textContent = player.currencies.money;
            saveGame();
        }}

        else {
        if(player.currencies.money >= 100000){
        player.currencies.money -= 200000;
        document.getElementById("powerOwned").textContent = player.currencies.power;
        document.getElementById("moneyOwned").textContent = player.currencies.money;
        alert("Scammer Get Scammed lol, you just lost $200,000");
        }}})

document.getElementById("cannonBuy").addEventListener(
    "click", () => {
        randomChance = Math.random();
        if (randomChance < 0.99) {
        if(player.currencies.money >= 500000){
            player.currencies.money -= 500000;
            player.currencies.power += 300;
            document.getElementById("powerOwned").textContent = player.currencies.power;
            document.getElementById("moneyOwned").textContent = player.currencies.money;
            saveGame();
        }}

        else {
        if(player.currencies.money >= 500000){
        player.currencies.money -= 1000000;
        document.getElementById("powerOwned").textContent = player.currencies.power;
        document.getElementById("moneyOwned").textContent = player.currencies.money;
        alert("Scammer Get Scammed lol, you just lost $1,000,000");
        }}})

document.getElementById("lightsaberBuy").addEventListener(
    "click", () => {
        randomChance = Math.random();
        if (randomChance < 0.99) {
        if(player.currencies.money >= 1000000){
            player.currencies.money -= 1000000;
            player.currencies.power += 5000;
            document.getElementById("powerOwned").textContent = player.currencies.power;
            document.getElementById("moneyOwned").textContent = player.currencies.money;
            saveGame();
        }}

        else {
        if(player.currencies.money >= 1000000){
        player.currencies.money -= 2000000;
        document.getElementById("powerOwned").textContent = player.currencies.power;
        document.getElementById("moneyOwned").textContent = player.currencies.money;
        alert("Scammer Get Scammed lol, you just lost $2,000,000");
        }}})

window.addEventListener("DOMContentLoaded", () => {
    
    
    const textElement = document.getElementById("labelDagger");

    if (textElement) {
        if (player.currencies.money >= 50) {
            textElement.style.color = "rgb(0, 184, 0)";
        } else {
            textElement.style.color = "rgb(184, 2, 2)"; 
        }
    } else {
        console.error("HTML element 'labelDragon' was still not found!");
    }

});

window.addEventListener("DOMContentLoaded", () => {
    
    
    const textElement = document.getElementById("labelSword");

    if (textElement) {
        if (player.currencies.money >= 1000) {
            textElement.style.color = "rgb(0, 184, 0)";
        } else {
            textElement.style.color = "rgb(184, 2, 2)"; 
        }
    } else {
        console.error("HTML element 'labelDragon' was still not found!");
    }

});

window.addEventListener("DOMContentLoaded", () => {
    
    
    const textElement = document.getElementById("labelMusket");

    if (textElement) {
        if (player.currencies.money >= 10000) {
            textElement.style.color = "rgb(0, 184, 0)";
        } else {
            textElement.style.color = "rgb(184, 2, 2)"; 
        }
    } else {
        console.error("HTML element 'labelDragon' was still not found!");
    }

});

window.addEventListener("DOMContentLoaded", () => {
    
    
    const textElement = document.getElementById("labelLaser");

    if (textElement) {
        if (player.currencies.money >= 100000) {
            textElement.style.color = "rgb(0, 184, 0)";
        } else {
            textElement.style.color = "rgb(184, 2, 2)"; 
        }
    } else {
        console.error("HTML element 'labelDragon' was still not found!");
    }

});

window.addEventListener("DOMContentLoaded", () => {
    
    
    const textElement = document.getElementById("labelCannon");

    if (textElement) {
        if (player.currencies.money >= 500000) {
            textElement.style.color = "rgb(0, 184, 0)";
        } else {
            textElement.style.color = "rgb(184, 2, 2)"; 
        }
    } else {
        console.error("HTML element 'labelDragon' was still not found!");
    }

});

window.addEventListener("DOMContentLoaded", () => {
    
    
    const textElement = document.getElementById("labelLightsaber");

    if (textElement) {
        if (player.currencies.money >= 1000000) {
            textElement.style.color = "rgb(0, 184, 0)";
        } else {
            textElement.style.color = "rgb(184, 2, 2)"; 
        }
    } else {
        console.error("HTML element 'labelDragon' was still not found!");
    }

});

document.getElementById("secretBad").addEventListener(
    "click", () => {
        saveGame();
        alert("Progress Resetted");
        player.currencies.money = 0
        player.currencies.power = 0
        document.getElementById("moneyOwned").textContent = player.currencies.money;
        document.getElementById("powerOwned").textContent = player.currencies.power;
        saveGame();
        localStorage.setItem('playerData', JSON.stringify(player));
    })

document.getElementById("secretGood").addEventListener(
    "click", () => {
        saveGame();
        window.location = "http://127.0.0.1:5500/good.html";
    })

let storedData = localStorage.getItem("playerData");
if(storedData){
    player = JSON.parse(storedData);
    document.getElementById("moneyOwned").textContent = player.currencies.money;
    document.getElementById("powerOwned").textContent = player.currencies.power;
}

function saveGame(){
    localStorage.setItem('playerData', JSON.stringify(player));
}