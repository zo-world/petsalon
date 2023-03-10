function displayFooterInfo() {
  console.log("footer info");
  //click on the button and display the info
  //on the footer
  document.getElementById("information").innerHTML =`
  <p>Welcome to ${petSalon.name}</p>
  <p>It is located at ${petSalon.address.city}, ${petSalon.address.street} zip code: ${petSalon.address.zip}</p>
  <p>It is open from ${petSalon.hours.open} to ${petSalon.hours.close}</p>
  `;
}

displayFooterInfo();

function displayFooterInfo() {
  console.log("pets info");
  //click on the button and display the info
  //on the footer
  document.getElementById("pets").innerHTML =`
  <p>Pets name are ${petSalon.pets.name}</p>
  `;
}