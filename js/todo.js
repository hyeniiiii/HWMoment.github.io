const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
let toDoArr = []


function saveToDo(){
    localStorage.setItem(TODOS_KEY ,JSON.stringify(toDoArr));//투두리스트를 문자로 저장한다
    
}
function delToDo(e){
    const li = e.target.parentElement;
    li.remove();
    toDoArr = toDoArr.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDo();
    
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",delToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);

}


function toDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDoArr.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo();

}

toDoForm.addEventListener("submit",toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDoArr = parsedToDos;
    parsedToDos.forEach(paintToDo);
}




