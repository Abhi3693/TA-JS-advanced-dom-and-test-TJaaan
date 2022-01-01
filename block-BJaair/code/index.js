let root = document.querySelector(".cardHolder");
let form = document.querySelector(".container");
let cardInput = document.querySelector(".cardInput");

let index = 0;
function createInput(value1, value2) {
    let li = document.createElement("li")
    let input1 = document.createElement("input");
    input1.classList.add("cardInput");
    input1.value = value1;
    let input2 = document.createElement("input");
    input2.classList.add("cardInput");
    input2.value = value2;

    li.append(input1, input2);
    root.append(li);
}

function handleSubmit(event) {
    event.preventDefault();
    let value1 = event.target.elements.input1.value;
    let value2 = event.target.elements.input2.value;
    index++;
    createInput(value1, value2);
}

form.addEventListener("submit", handleSubmit);


