// let myArray = [1,2,true,"Miguel"];//aray

// let myObject = {
//   name: "Miguel",//attributes
//   age: 20,
//   email: "anpch@example.com",
//   music: ["music, bad bunny"]//aray
// };

//object literal

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
  pets: [
      {
        name: "Scooby",
        age: 50,
        gender: "male",
        service: "Vaccine"
      },
      {
        name: "Garfield",
        age: 30,
        gender: "female",
        service: "Haircut"
      },
      {
        name: "Linda",
        age: 15,
        gender: "female",
        service: "Nail Clean-up"
      }
  ]
}

console.log(petSalon.pets.length);
console.log(petSalon.pets[0].name);
console.log(petSalon.pets[0].age);
console.log(petSalon.pets[0].gender);
console.log(petSalon.pets[0].service);

console.log(petSalon.pets[1].name);
console.log(petSalon.pets[1].age);
console.log(petSalon.pets[1].gender);
console.log(petSalon.pets[1].service);

console.log(petSalon.pets[2].name);
console.log(petSalon.pets[2].age);
console.log(petSalon.pets[2].gender);
console.log(petSalon.pets[2].service);