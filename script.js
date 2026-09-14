let display = document.getElementById("display");

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === "C") {
            display.value = "";
        }
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }
        else {
            display.value += value;
        }
    });
});

document.addEventListener("keydown", (event) => {
    let key = event.key;

    if (key >= "0" && key <= "9") {
        display.value += key;
    }
    else if (key === "+" || key === "-" || key === "*" || key === "/" || key === ".") {
        display.value += key;
    }
    else if (key === "Enter") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }
    else if (key === "Escape") {
        display.value = "";
    }
});
