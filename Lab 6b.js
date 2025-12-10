function startGame() {

    let plays = prompt("How many times do you want to play?");
    plays = Number(plays);

    if (isNaN(plays) || plays <= 0) {
        document.getElementById("output").innerHTML =
            "❌ Please enter a valid positive number.";
        return;
    }

    let balance = 0;
    let results = "";

    for (let i = 0; i < plays; i++) {

        let roll1 = Math.floor(Math.random() * 6) + 1;
        let roll2 = Math.floor(Math.random() * 6) + 1;

        if (roll1 > roll2) {
            balance += 5;
            results += `Play ${i + 1}: You rolled ${roll1} vs ${roll2} — WIN (+$5)<br>`;
        } else if (roll1 < roll2) {
            balance -= 5;
            results += `Play ${i + 1}: You rolled ${roll1} vs ${roll2} — LOSS (-$5)<br>`;
        } else {
            results += `Play ${i + 1}: You rolled ${roll1} vs ${roll2} — TIE (no change)<br>`;
        }
    }

    results += `<br><strong>Final Balance: $${balance}</strong>`;

    document.getElementById("output").innerHTML = results;
}