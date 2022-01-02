let box = document.querySelector(".box");
let container = document.querySelector(".container");
let data = [
    {title: "Globe", icon: `<i class="fas fa-globe-asia"></i>` },
    {title: "Heart", icon: `<i class="far fa-heart"></i>` },
    {title: "Chess", icon: `<i class="fas fa-chess"></i>` },
    {title: "Desktop", icon: `<i class="fas fa-desktop"></i>` },
    {title: "Rupee", icon: `<i class="fas fa-rupee-sign"></i>` },
    {title: "Apple", icon: `<i class="fas fa-apple-alt"></i>` },
    {title: "Star", icon: `<i class="far fa-star"></i>` },
    {title: "Cat", icon: `<i class="fas fa-cat"></i>` },
]

document.addEventListener('DOMContentLoaded', (event)=> {

    function handleDragStart(event) {
        this.style.opacity = "0.4";

        dragSrcEl = this;

        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/html', this.innerHTML);
        return false;
    }
    
    
    function handleDragEnd(event) {
        this.style.opacity = "1";

        let allBox = document.querySelectorAll(".box")
        allBox.forEach((box)=> {
            let value = box.className;
            if(value.includes("over")){
                box.classList.remove("over")
            }
        })
    }

    function handleDragOver(event) {
        if(event.preventDefault){
            event.preventDefault();
        }
        return false;
    }

    function handleDragEnter(event) {
        this.classList.add("over");
    }
    
    function handleDragLeave(event) {
        this.classList.remove("over");
    }

    function handleDrop(event) {
        event.stopPropagation();

        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = event.dataTransfer.getData('text/html');
        }
        
        return false;
    }

    let fragment = new DocumentFragment;

    data.forEach((elm)=> {
    
        let div = document.createElement("div");
        div.classList.add("box");
        div.draggable="true";
        div.innerHTML = elm.icon;
    
    
        div.addEventListener("dragstart", handleDragStart);
        div.addEventListener("dragend", handleDragEnd);
        div.addEventListener("dragover", handleDragOver);
        div.addEventListener("dragenter", handleDragEnter);
        div.addEventListener("dragleave", handleDragLeave);
        div.addEventListener("drop", handleDrop);
        fragment.append(div);
    })
    
    container.append(fragment);
})