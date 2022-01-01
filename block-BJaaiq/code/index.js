let add = document.querySelector(".add");

let lastIndex = 0;

function addQuotes() {
    if (lastIndex === quotes.length - 1) return;
  
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

    if (windowRelativeBottom > document.documentElement.clientHeight + 100) return;

    renderItem(lastIndex + 1);
}
  
window.addEventListener("scroll", addQuotes); 


function renderItem(i) {
    let h2 = document.createElement("h2");
    h2.innerText = quotes[i].quoteText;
    let h3 = document.createElement("h3");
    h3.innerText = quotes[i].quoteAuthor;

    add.append(h2,h3);
    lastIndex = i;
}

function ready() {
    alert(`The content of the DOM is loaded`)
    for(let i = 0; i < 3; i++){
        renderItem(i);
    }
}

document.addEventListener("DOMContentLoaded", ready);
