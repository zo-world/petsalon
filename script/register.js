//object literal
//create pets using object literal (name, age, age, service)
let petSalon = {
  name: "ZO's Fashion Pet Salon",
  address: {
    street: "Santa Isidra 3 Calle 3 D-3",
    city: "Fajardo",
    state: "PR",
    zip: "00738"
  },
  hours: {
    open: "9:00 am",
    close: "5:00 pm"
  },
  pets: []
}

let petID=0;
// object constructor
//------------Parameters--------------
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
  this.id=petID++;
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

//what about if an input is empty?
function isValid(aPet){
  let valid = true;//we start assuming that the inputs are valid
  if(aPet.name === ""){
    valid = false;
  }
  if(aPet.age === ""){
    valid = false;
  }
  if(aPet.gender === ""){
    valid = false;
  }
  if(aPet.breed === ""){
    valid = false;
  }
  if(aPet.service === ""){
    valid = false;
  }
  if(aPet.type === ""){
    valid = false;
  }
  if(aPet.owner === ""){
    valid = false;
  }
  if(aPet.phone === ""){
    valid = false;
  }
  //otherwise
  return valid;
}

// register function
function register() {
  console.log("register");
  //create the newPet
  let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value,inputOwner.value,inputPhone.value);
  //validation
  if(isValid(newPet)===true){
  //push the newPet obj into the array
  petSalon.pets.push(newPet);
  //display on the console the pets into the array
  console.log(petSalon.pets);
  displayTable();
  updateInfo();
  // displayPetCards();
  //clear the form
  clearForm();
  } 
}

function updateInfo() {
  document.getElementById("numberOfPets").innerHTML = petSalon.pets.length;
}

function deletePet(theId) {
  console.log("Deleting the selected pet", theId);
  let petIndex;
  //travel the array
  for(let i=0; i<petSalon.pets.length; i++){
    let pet = petSalon.pets[i];
    //find the pet's id
    if(pet.id === theId){ 
      petIndex=i;
    }
  }
  petSalon.pets.splice(petIndex,1);
  //remove it from the array
  document.getElementById(theId).remove();
  updateInfo();
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
  // displayPetCards();
  displayTable();
  updateInfo();
}

window.onload = init;