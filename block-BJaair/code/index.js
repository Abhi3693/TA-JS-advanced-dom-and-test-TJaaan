let root = document.querySelector(".cardHolder");
let form = document.querySelector(".container");
let cardInput = document.querySelector(".cardInput");

let data = JSON.parse(localStorage.getItem("notice")) || [];

function updateData(item) {
    localStorage.setItem("notice", JSON.stringify(item));
    createInput(data);
}

function handleInput(event, item ,id) {
    if(event.keyCode === 13){
        let updatedValue = event.target.value;
        data[id][item] = updatedValue;
        updateData(data);
    }   
}

function handleEdit(event, item ,id){

    let elm = event.target;
    let value = event.target.innerText;
    let input = document.createElement("input");
    input.value = value;

    input.addEventListener("keyup", (event)=> {handleInput(event, item ,id)});
    input.addEventListener("blur", (event)=> {
        let updatedValue = event.target.value;
        data[id][item] = updatedValue;
        updateData(data);
    });
    let parent = elm.parentElement;
    parent.replaceChild(input, elm)
}

function handleDelete(event, index){    
    data.splice(index, 1);
    updateData(data);
}

function createInput(arr = data) {
    root.innerHTML = "";

    let fragment = new DocumentFragment;
    arr.forEach((elm, index)=> {
        let li = document.createElement("li");
        let category = document.createElement("p");
        category.innerText = elm.category;
        category.addEventListener("dblclick", (event)=> {handleEdit(event, "category" ,index)});

        let title = document.createElement("h2");
        title.innerText = elm.title;
        title.addEventListener("dblclick", (event)=> {handleEdit(event, "title" ,index)});

        let btn = document.createElement("button");
        btn.innerText = "❌";
        btn.addEventListener("click", (event)=> { handleDelete(event, index)});

        li.append(category, title,btn);
        fragment.append(li);
    })
    root.append(fragment);
}

function handleSubmit(event) {
    event.preventDefault();

    let category = event.target.elements.input1.value;
    let title = event.target.elements.input2.value;
    
    data.push({category, title});
    event.target.elements.input1.value = "";
    event.target.elements.input2.value = "";
    updateData(data);
}

form.addEventListener("submit", handleSubmit);

updateData(data);
