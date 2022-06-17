'use strict'
//Creating a Dog constructor
function Dog(name,breed,color,gender){
    //Declaring properties of the dog object by taking parameter values
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.gender = gender;
}
function main(){
	var newDog = new Dog("Fiddo", "Lab", "brown", "male");
	alert(newDog.name); 
	alert(newDog.breed);
	alert(newDog.color);
	alert(newDog.gender);
}

main();

//DO NOT USE THE PRINT. USE DOCUMENT.WRITE OR CONSOLE.LOG

function ToDo(name,dueDate,list){
    //Setting properties for the object
    this.name = name;
    this.dueDate = dueDate;
    // Declaring a variable to hold an array
    this.toDoList = [];
    //Looping to append each 
    for (let i = 0; i < list.length; i++){
        toDoList.append(list[i]);
    }
}
function main(){
	newToDoList = new ToDo("Kenn", "Next Week", ["Do the dishes", "Wash your clothes"])
	document.write(newToDoList.list);
}

main();
