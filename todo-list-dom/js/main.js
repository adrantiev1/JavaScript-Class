/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

// required vars
var todos = document.querySelector('.todo-list');
var todoCount = 0;

// todo form submit handler, adds a new todo item to the 'list'
document.querySelector('.todo-frm').addEventListener('submit', function (evt) {
	
	var div,
		checkbox,
		label,
		labelText,
		todoText,
		arrowUp,
		arrowDown;

	todoText = evt.target.elements['todo-item'].value;
	var dn = document.createTextNode('\u21e9'); 
	var up = document.createTextNode('\u21e7'); 

	// adding a todo regardless, so might as well increment now...
	todoCount += 1;
	
	if (todoText === '') {
		todoText = 'Todo ' + (todoCount);
	}

	// create required elements
	div = document.createElement('div');
	checkbox = document.createElement('input');
	label = document.createElement('label');
	labelText = document.createTextNode(todoText);
	arrowUp = document.createElement("span");
	arrowDown = document.createElement("span");

	// set appropriate attributes
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('id', 'todo-' + todoCount);
	label.setAttribute('for', 'todo-' + todoCount);
	label.setAttribute('contenteditable', '');

	arrowUp.classList.add("arrow" ,"up");
	arrowUp.appendChild(up);

	arrowDown.classList.add("arrow" ,"dn");
	arrowDown.appendChild(dn);
	

	// build document fragment
	label.appendChild(labelText);
	div.appendChild(checkbox);
	div.appendChild(label);
	div.appendChild(arrowUp);
	div.appendChild(arrowDown);

	
	

	// add the document fragment to the document for rendering
	todos.appendChild(div);

	// clear the form
	evt.target.reset();


	evt.preventDefault();
});

document.querySelector('.todo-list').addEventListener('click', function(evt) {
	// check for click on an arrow
	if(evt.target.classList.contains('arrow'))
	{
	// identify the type of arrow (i.e. down or up)
	if(evt.target.classList.contains('dn')) {
		console.log('down...');
		} 
	else if(evt.target.classList.contains('up')) {
		console.log(evt.target.parentNode + 'up...');
		}
	}
});



document.querySelector('.todo-list').addEventListener('click', function (evt) {
	// check for click on an arrow
	var targetTodo = evt.target.parentNode;
	var todoList = targetTodo.parentNode;
	var siblingTodo;
	if (evt.target.classList.contains('arrow')) {
	// identify the type of arrow (i.e. down or up)
	if (evt.target.classList.contains('dn')) {
	siblingTodo = targetTodo.nextElementSibling;
	// insert the sibling before the target
	todoList.insertBefore(siblingTodo, targetTodo);
	} else if (evt.target.classList.contains('up')) {
	siblingTodo = targetTodo.previousElementSibling;
	// insert the sibling before the target
	todoList.insertBefore(targetTodo, siblingTodo);
	}
	}
});






