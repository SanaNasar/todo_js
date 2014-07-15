// JavaScript file for the To-Do List

var form = document.getElementById('todo_form');
var list = document.getElementById('input');
 
var myList = document.getElementById('do');

 
	form.onsubmit = function(event) {
	event.preventDefault();
	
	var newItemList = document.createElement('li');
	var newListNode = document.createTextNode(list.value);

	newItemList.appendChild(newListNode);
	myList.appendChild(newItemList);

	//Creating a button to delete each item in the list

	var removeItem = document.createTextNode('Done');
	var removeButton = document.createElement('button');

	removeButton.appendChild(removeItem);
	newItemList.appendChild(removeButton);


	// //Creating a button to delete all the items in the list

	var deleteAll = document.createTextNode('DeleteAll');

	//Function for removing each item in a list

	removeButton.onclick = function() {
		myList.removeChild(newItemList); //Node we are removing with the parent
		// myList is a parent and removeItenList is the one we need to remove.
	};

	//Function for removing all the items in a list

	deleteAll.onclick = function() {
	todo_list.remove();
	};
};





