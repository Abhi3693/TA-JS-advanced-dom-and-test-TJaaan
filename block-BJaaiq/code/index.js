let add = document.querySelector(".add");

let max = 10;
let lastIndex = 0;

function addQuotes() {  
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight + scrollTop >= scrollHeight && lastIndex < quotes.length - 1) {
        renderItem();
    }
}
window.addEventListener("scroll", addQuotes); 

function renderItem() {
    for(let i = 0; i < max; i++){
        let h2 = document.createElement("h2");
        h2.innerText = quotes[lastIndex].quoteText;
        let h3 = document.createElement("h3");
        h3.innerText = quotes[lastIndex].quoteAuthor;

        add.append(h2,h3);
        lastIndex++;
    }
}

function ready() {
    alert(`The content of the DOM is loaded`);
    addQuotes();
}

document.addEventListener("DOMContentLoaded", ready);
