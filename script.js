

let box = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let currentPlayer = prompt("Enter symbol X or O :-").toUpperCase();

if (currentPlayer !== "X" || currentPlayer !== "O") {
    alert("Please select X or  O")
}

function allboxs() {
    console.log(`
____________
| ${box[0]} | ${box[1]} | ${box[2]} |
____________
| ${box[3]} | ${box[4]} | ${box[5]} |
___________
| ${box[6]} | ${box[7]} | ${box[8]} |
____________
`)
};

let wining = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkwinir() {
    for (let pattern of wining) {
        let [a, b, c] = pattern
        if (box[a] == currentPlayer &&
            box[b] == currentPlayer &&
            box[c] == currentPlayer) {
            return true
        }
    }
    return false
}

for (let i = 0; i < 9; i++) {

    allboxs();

    let input = prompt("enter number 1  to 9 :");
    let index = input - 1;

    if (index < 0 || index > 8) {
        alert("invalid number!")
        continue;
    }

    if (box[index] === "X" || box[index] === "O") {
        alert("Already filled! Try again");
        continue;
    }

    box[index] = currentPlayer;

    if (checkwinir()) {
        allboxs()
        alert(`player ${currentPlayer} is win!`)
        break;
    }

    if (i == 8) {
        allboxs();
        alert("draw.....!!")
        break;
    }
    if (currentPlayer == "X") {
        currentPlayer = "O"
    } else {
        currentPlayer = "X"
    }
}

allboxs();

