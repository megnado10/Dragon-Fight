let player = {
    "currencies": {
        "money": 0,
        "power": 0
    },
    "money": {
        "perClick": 1
    }
};

document.getElementById("shopButton").addEventListener(
    "click", () => {
        saveGame();
        window.location = "http://127.0.0.1:5500/shop.html";
})

document.getElementById("arenaButton").addEventListener(
    "click", () => {
        saveGame();
        window.location = "http://127.0.0.1:5500/arena.html";
})

document.getElementById("dragonElim").addEventListener(
    "click", () => {
        randomChance = Math.random();
        if (randomChance < 0.5) {
        if(player.currencies.power >= 1000000){
        player.currencies.money += 10000;
        document.getElementById("moneyOwned").textContent = player.currencies.money;
        alert("WooHoo! You Win!!!");
        }}

        else {
        if(player.currencies.power >= 1000000){
        player.currencies.power -= 1000;
        document.getElementById("powerOwned").textContent = player.currencies.power;
        alert("Noooooooo, You Lost.....");
        }}})

window.addEventListener("DOMContentLoaded", () => {
    
    // CHANGED: "dragonLabel" became "labelDragon" to match your HTML
    const textElement = document.getElementById("labelDragon");

    if (textElement) {
        if (player.currencies.power >= 1000000) {
            textElement.style.color = "rgb(0, 184, 0)";
        } else {
            textElement.style.color = "rgb(184, 2, 2)"; 
        }
    } else {
        console.error("HTML element 'labelDragon' was still not found!");
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