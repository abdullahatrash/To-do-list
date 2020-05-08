//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deletcheck);

//functions

function addTodo(Event){

     
    //preventing form from submitting
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Creat LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TODO LIST
    todoList.appendChild(todoDiv);
    //CLEAR TODO INPUT VALUE
    todoInput.value ="";

}

function deletcheck(e){
    const item = e.target;

    //DELET TODO

    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    //CHECK MARK 

    if(item.classList[0] === "complete-btn"){

        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }


}