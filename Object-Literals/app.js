function Person() {
    //Declaring properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.zipCode = zipCode;
    // Getting article from html file
    let listContainer = getElementById("Person-List");
    // Creating an unordered list element
    let ul = document.createElement('ul');
    //Creating a list element
    let li = document.createElement('li');
    //Creating an array for each person
    //let li.texContent = 
    let personArray = [];
    //Printing a temperate literal to the html document
    personArray.append(`${this.firstName} ${this.lastName}, ${this.age}, ${this.zipCode}`);
    personArray.forEach(person => {
        console.log(`
        <div>
        <p>Name: ${this.firstName} ${this.lastName}</p>
        <p>Age: ${age}</p>
        <p>Zip Code: ${this.zipCode}</p>
        `)
    });
}
//Initializing new objects
let JimmyP = new Person("Jimmy", "Page", 62, 00821);
let RickN = new Person("Rick", "Nielsen", 57, 61016);
let JoeW = new Person("Joe", "Walsh", 58, 90001);
let LemmyK = new Person("Lemmy", "Kilmister", 57, 21120);