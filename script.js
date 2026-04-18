function greetUser() {
    const name = document.getElementById("nameInput").value.trim();
    const greeting = document.getElementById("greeting");

    if (name !== "") {
        greeting.textContent = `Hello, ${name}`;
    } else {
        greeting.textContent = "Hello";
    }
}

function changeColor(element, color) {
    element.style.backgroundColor = color;

    if (color === "yellow") {
        element.style.color = "black";
    } else {
        element.style.color = "white";
    }
}