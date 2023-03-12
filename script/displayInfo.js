function PetSalonInfo() {
  console.log("Pet Salon Info");
  // click on the button and display the info
  // on the footer
  document.getElementById("information").innerHTML =`
  <h1>Welcome to ${petSalon.name}</h1>
  <p>It is located at ${petSalon.address.city}, ${petSalon.address.street} ${petSalon.address.zip}</p>
  <p>It is open from ${petSalon.hours.open} to ${petSalon.hours.close}</p> <br>
  <p>Please enter information below, once registered we can begin service. Thank you for your understanding and continued patience!</p>
  `;
}

PetSalonInfo();

function displayPetsInfo() {
  console.log("Pets info");
  //click on the button and display the info
  //on the footer
  document.getElementById("pets").innerHTML =`
  <p>Pets name are ${petSalon.pets.name[0]}</p>
  `;
}