//your code here


let btn = document.getElementById("addTodoBtn");

btn.addEventListener('click', ()=>{
	let input = document.getElementById("newTodoInput");
	if(input.value.trim().length == 0){
		return;
	}
	let list = document.getElementById("todoList");

	let item = document.createElement("li");
	item.innerHTML = input.value;

	list.appendChild(item);
	
})
