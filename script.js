let display = document.getElementById("display");

let buttons = document.querySelectorAll("button");

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Button support
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === "C") {
            display.value = "";
        }
        else if (value === "=") {
            calculate();
        }
        else {
            display.value += value;
        }
    });
});

// Keyboard support
document.addEventListener("keydown", (event) => {
    let key = event.key;

    if (key >= "0" && key <= "9") {
        display.value += key;
    }
    else if (["+", "-", "*", "/", "."].includes(key)) {
        display.value += key;
    }
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }
    else if (key === "Escape") {
        display.value = "";
    }
});