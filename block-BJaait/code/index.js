var btn = document.querySelector('.add');
var remove = document.querySelector('.draggable');
var ul = document.querySelector('ul');

let data = JSON.parse(localStorage.getItem("todo")) || [];


function dragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
};

function dragEnter(e) {
  this.classList.add('over');
}

function dragLeave(e) {
  e.stopPropagation();
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function dragDrop(e) {
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}

function dragEnd(e) {
  var listItems = document.querySelectorAll('.draggable');

    listItems.forEach((item)=> {
        if(item.className.includes("over")) {
            item.classList.remove('over');
        }
    })

  this.style.opacity = '1';
}

function updateUI(item = data) {
    localStorage.setItem("todo", JSON.stringify(item));
    createUI();
}

function createUI() {

    ul.innerHTML = "";
    let fragment = new DocumentFragment;

    data.forEach((elm)=> {
        var li = document.createElement('li');
        li.draggable = true;
        li.className = 'draggable';
        li.innerText = elm.todo;

        li.addEventListener('dragstart', dragStart, false);
        li.addEventListener('dragenter', dragEnter, false);
        li.addEventListener('dragover', dragOver, false);
        li.addEventListener('dragleave', dragLeave, false);
        li.addEventListener('drop', dragDrop, false);
        li.addEventListener('dragend', dragEnd, false);

        fragment.append(li);
    })
    ul.append(fragment);
}

function addNewItem() {
  var newItem = document.querySelector('.input').value;
  if (newItem != '') {
    document.querySelector('.input').value = '';
    data.push({todo:newItem});
    updateUI();
  }
}

btn.addEventListener('click', addNewItem);
updateUI();