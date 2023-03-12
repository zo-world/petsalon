//object literal
//create pets using object literal (name, age, age, service)
let petSalon = {
  name: "ZO's Pet Salon",
  address: {
    street: "Santa Isidra 3 Calle 3 D-3",
    city: "Fajardo",
    state: "PR",
    zip: 10000
  },
  hours: {
    open: "9:00 am",
    close: "5:00 pm"
  },
  pets: []
}

// object constructor
//------------Parameters---------------
function Pet(n,a,g,b,s,t,o,p){
  //attr or properties
  this.name = n;
  this.age = a;
  this.gender = g;
  this.breed = b;
  this.service = s;
  this.type = t;
  this.owner = o;
  this.phone = p;
}

//get the values from the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtType");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");

// register function
function register() {
  console.log("register");
  //create the newPet
  let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value,inputOwner.value,inputPhone.value);
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
  inputBreed.value = "";
  inputService.value = "";
  inputType.value = "";
  inputOwner.value = "";
  inputPhone.value = "";
}

function init() {
  console.log("init");
  let pet1 = new Pet("Scooby", 20, "male", "grooming");
  let pet2 = new Pet("Poseidon", 35, "male", "nail cut");
  let pet3 = new Pet("Garfield", 20, "female", "grooming");
  petSalon.pets.push(pet1,pet2, pet3);//push the pets into the array
}

window.onload = init;