const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todos');

todoForm.addEventListener('submit', ev => {
	ev.preventDefault();
	addTodoItem();
});

function addTodoItem() {
	const todoName = todoInput.value;

	if (todoName) {
		const newTodo = document.createElement('li');
		newTodo.innerText = todoName;
		
		addControlButtons(newTodo);

		todoList.appendChild(newTodo);
		todoInput.value = '';
	}
}

function addControlButtons(todoItem) {
	const completeButton = document.createElement('i');
	completeButton.classList.add('fas', 'fa-check');
	completeButton.addEventListener('click', () => {
		todoItem.classList.toggle('complete');
		completeButton.classList.toggle('fa-redo')
	});
	todoItem.appendChild(completeButton);

	const removeButton = document.createElement('i');
	removeButton.classList.add('far', 'fa-trash-alt');
	removeButton.addEventListener('click', () => {
		todoItem.remove();
	});
	todoItem.appendChild(removeButton);
}
