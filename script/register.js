//object literal
//create pets using object literal (name, age, age, service)
let petSalon = {
  name: "The fashion pet salon",
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zip: 10000
  },
  hours: {
    open: "9:00 am",
    close: "5:00 pm"
  },
  pets:[]
}

// object constructor
//------------Parameters---------------
function Pet(n,a,g,s){
  //attr or properties
  this.name = n;
  this.age = a;
  this.gender = g;
  this.service = s;
}

//get the values from the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputService = document.getElementById("txtService");


// register function
function register() {
  console.log("register");
  //create the newPet
  let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputService.value);
  //push the newPet obj into the array
  petSalon.pets.push(newPet);
  //display on the console the pets into the array
  console.log(petSalon.pets);
  //clear the form
  clearForm();
}

function clearForm() {
  inputName.value = "";
  inputAge.value = "";
  inputGender.value = "";
  inputService.value = "";
}

function init() {
  console.log("init");
  let pet1 = new Pet("Scooby", 20, "male", "grooming");
  let pet2 = new Pet("Poseidon", 35, "male", "nail cut");
  petSalon.pets.push(pet1,pet2);//push the pets into the array
}

window.onload = init;